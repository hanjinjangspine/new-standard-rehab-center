import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

export const SITE_ORIGIN = "https://rehab.new-standard.co.kr";
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const KEY_PATTERN = /^[a-f0-9]{32}$/;
const MAX_INDEXNOW_URLS = 10_000;
const REQUEST_TIMEOUT_MS = 15_000;

function decodeXmlText(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

export async function discoverIndexNowKey(publicDir) {
  const candidates = [];

  for (const entry of await readdir(publicDir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".txt")) continue;

    const filenameKey = entry.name.slice(0, -4);
    if (!KEY_PATTERN.test(filenameKey)) continue;

    const filePath = path.join(publicDir, entry.name);
    const fileKey = (await readFile(filePath, "utf8")).trim();
    if (fileKey === filenameKey) {
      candidates.push({ key: fileKey, filename: entry.name });
    }
  }

  if (candidates.length !== 1) {
    throw new Error(`Expected exactly one valid IndexNow key file; found ${candidates.length}.`);
  }

  return candidates[0];
}

export function validateRobots(robotsText, sitemapUrl) {
  const lines = robotsText.split(/\r?\n/);
  let agents = [];
  let directivesStarted = false;
  let sitemapDeclared = false;

  for (const rawLine of lines) {
    const line = rawLine.replace(/#.*$/, "").trim();
    if (!line) continue;

    const separator = line.indexOf(":");
    if (separator === -1) continue;

    const field = line.slice(0, separator).trim().toLowerCase();
    const value = line.slice(separator + 1).trim();

    if (field === "user-agent") {
      if (directivesStarted) {
        agents = [];
        directivesStarted = false;
      }
      agents.push(value.toLowerCase());
      continue;
    }

    if (field === "sitemap" && value === sitemapUrl) {
      sitemapDeclared = true;
    }

    if (field === "allow" || field === "disallow") {
      directivesStarted = true;
      if (field === "disallow" && agents.includes("*") && value === "/") {
        throw new Error("robots.txt blocks the entire site; IndexNow submission was stopped.");
      }
    }
  }

  if (!sitemapDeclared) {
    throw new Error("robots.txt does not declare the canonical sitemap URL.");
  }
}

export function extractSitemapUrls(sitemapXml, origin = SITE_ORIGIN) {
  const canonicalOrigin = new URL(origin).origin;
  const matches = [...sitemapXml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)];
  const urls = matches.map((match) => decodeXmlText(match[1].trim()));
  const uniqueUrls = [...new Set(urls)];

  if (uniqueUrls.length !== urls.length) {
    throw new Error("Sitemap contains duplicate URLs.");
  }

  if (uniqueUrls.length < 1 || uniqueUrls.length > MAX_INDEXNOW_URLS) {
    throw new Error(
      `Sitemap URL count must be between 1 and ${MAX_INDEXNOW_URLS}; found ${uniqueUrls.length}.`
    );
  }

  for (const urlString of uniqueUrls) {
    const url = new URL(urlString);
    if (url.origin !== canonicalOrigin) {
      throw new Error("Sitemap contains a URL outside the canonical site origin.");
    }
    if (url.protocol !== "https:") {
      throw new Error("Sitemap contains a non-HTTPS URL.");
    }
  }

  if (!uniqueUrls.includes(`${canonicalOrigin}/`)) {
    throw new Error("Sitemap does not include the canonical home page.");
  }

  return uniqueUrls;
}

export function buildIndexNowPayload({ origin, key, keyLocation, urls }) {
  return {
    host: new URL(origin).host,
    key,
    keyLocation,
    urlList: urls
  };
}

async function fetchText(url, label, fetchImpl = fetch) {
  const response = await fetchImpl(url, {
    redirect: "follow",
    headers: { "User-Agent": "new-standard-rehab-indexnow/1.0" },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
  });

  if (!response.ok) {
    throw new Error(`${label} returned HTTP ${response.status}.`);
  }

  return response.text();
}

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

export async function submitIndexNow(
  payload,
  { endpoint = INDEXNOW_ENDPOINT, fetchImpl = fetch, waitImpl = wait } = {}
) {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    let response;
    try {
      response = await fetchImpl(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": "new-standard-rehab-indexnow/1.0"
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
      });
    } catch (error) {
      if (attempt === 3) {
        throw new Error(`IndexNow network request failed: ${error.message}`);
      }
      await waitImpl(1_000 * attempt);
      continue;
    }

    if (response.status === 200 || response.status === 202) {
      return response.status;
    }

    if ((response.status === 429 || response.status >= 500) && attempt < 3) {
      await waitImpl(1_000 * attempt);
      continue;
    }

    throw new Error(`IndexNow returned HTTP ${response.status}.`);
  }

  throw new Error("IndexNow submission exhausted all retry attempts.");
}

export function parseArguments(args) {
  const supported = new Set(["--dry-run"]);
  for (const argument of args) {
    if (!supported.has(argument)) {
      throw new Error(`Unsupported argument: ${argument}`);
    }
  }
  return { dryRun: args.includes("--dry-run") };
}

export async function main(args = process.argv.slice(2)) {
  const { dryRun } = parseArguments(args);
  const origin = SITE_ORIGIN;
  const sitemapUrl = `${origin}/sitemap.xml`;
  const robotsUrl = `${origin}/robots.txt`;
  const publicDir = path.join(process.cwd(), "public");
  const { key, filename } = await discoverIndexNowKey(publicDir);
  const keyLocation = `${origin}/${filename}`;

  const [liveKey, robotsText, sitemapXml] = await Promise.all([
    fetchText(keyLocation, "IndexNow key file"),
    fetchText(robotsUrl, "robots.txt"),
    fetchText(sitemapUrl, "sitemap.xml")
  ]);

  if (liveKey.trim() !== key) {
    throw new Error("The deployed IndexNow key does not match the repository key file.");
  }

  validateRobots(robotsText, sitemapUrl);
  const urls = extractSitemapUrls(sitemapXml, origin);
  console.log(`IndexNow validation passed for ${urls.length} canonical sitemap URLs.`);

  if (dryRun) {
    console.log("Dry run complete; no IndexNow request was sent.");
    return;
  }

  const payload = buildIndexNowPayload({ origin, key, keyLocation, urls });
  const status = await submitIndexNow(payload);
  console.log(`IndexNow accepted ${urls.length} URLs with HTTP ${status}.`);
}

const isDirectRun = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isDirectRun) {
  main().catch((error) => {
    console.error(`IndexNow notification failed: ${error.message}`);
    process.exitCode = 1;
  });
}
