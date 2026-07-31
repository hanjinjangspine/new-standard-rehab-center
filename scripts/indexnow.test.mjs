import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  SITE_ORIGIN,
  buildIndexNowPayload,
  discoverIndexNowKey,
  extractSitemapUrls,
  parseArguments,
  submitIndexNow,
  validateRobots
} from "./submit-indexnow.mjs";

function sitemapXml(count = 10, origin = SITE_ORIGIN) {
  const paths = ["/", ...Array.from({ length: count - 1 }, (_, index) => `/program-${index + 1}`)];
  return `<?xml version="1.0"?><urlset>${paths
    .map((route) => `<url><loc>${origin}${route}</loc></url>`)
    .join("")}</urlset>`;
}

test("discovers exactly one key whose filename matches its content", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "rehab-indexnow-"));
  const key = "a".repeat(32);

  try {
    await writeFile(path.join(directory, `${key}.txt`), `${key}\n`, "utf8");
    assert.deepEqual(await discoverIndexNowKey(directory), {
      key,
      filename: `${key}.txt`
    });
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test("rejects missing or ambiguous ownership keys", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "rehab-indexnow-"));

  try {
    await assert.rejects(discoverIndexNowKey(directory), /found 0/);
    for (const key of ["b".repeat(32), "c".repeat(32)]) {
      await writeFile(path.join(directory, `${key}.txt`), key, "utf8");
    }
    await assert.rejects(discoverIndexNowKey(directory), /found 2/);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test("accepts the canonical ten-URL sitemap", () => {
  const urls = extractSitemapUrls(sitemapXml());
  assert.equal(urls.length, 10);
  assert.equal(urls[0], `${SITE_ORIGIN}/`);
});

test("rejects an empty sitemap, duplicates, or foreign hosts", () => {
  assert.throws(() => extractSitemapUrls("<urlset></urlset>"), /between 1 and 10000/);
  const duplicate = sitemapXml().replace(
    `${SITE_ORIGIN}/program-9`,
    `${SITE_ORIGIN}/program-8`
  );
  assert.throws(() => extractSitemapUrls(duplicate), /duplicate/);
  const foreign = sitemapXml().replace(SITE_ORIGIN, "https://example.com");
  assert.throws(() => extractSitemapUrls(foreign), /outside the canonical/);
});

test("requires an indexable robots file with the canonical sitemap", () => {
  const sitemapUrl = `${SITE_ORIGIN}/sitemap.xml`;
  assert.doesNotThrow(() =>
    validateRobots(`User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`, sitemapUrl)
  );
  assert.throws(
    () => validateRobots(`User-agent: *\nDisallow: /\nSitemap: ${sitemapUrl}\n`, sitemapUrl),
    /blocks the entire site/
  );
  assert.throws(() => validateRobots("User-agent: *\nAllow: /\n", sitemapUrl), /does not declare/);
});

test("builds the canonical IndexNow payload", () => {
  const key = "d".repeat(32);
  const keyLocation = `${SITE_ORIGIN}/${key}.txt`;
  const urls = extractSitemapUrls(sitemapXml());
  assert.deepEqual(buildIndexNowPayload({ origin: SITE_ORIGIN, key, keyLocation, urls }), {
    host: "rehab.new-standard.co.kr",
    key,
    keyLocation,
    urlList: urls
  });
});

test("accepts only HTTP 200 or 202 from IndexNow", async () => {
  const payload = { host: "rehab.new-standard.co.kr", urlList: [`${SITE_ORIGIN}/`] };
  for (const status of [200, 202]) {
    assert.equal(
      await submitIndexNow(payload, {
        fetchImpl: async () => ({ status }),
        waitImpl: async () => {}
      }),
      status
    );
  }
  await assert.rejects(
    submitIndexNow(payload, {
      fetchImpl: async () => ({ status: 400 }),
      waitImpl: async () => {}
    }),
    /HTTP 400/
  );
});

test("supports only the optional dry-run flag", () => {
  assert.deepEqual(parseArguments([]), { dryRun: false });
  assert.deepEqual(parseArguments(["--dry-run"]), { dryRun: true });
  assert.throws(() => parseArguments(["--all"]), /Unsupported argument/);
});
