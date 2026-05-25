import type { Metadata } from "next";
import ProgramPage from "@/components/ProgramPage";
import { programPages } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

const page = programPages["acute-sprain"];

export const metadata: Metadata = createMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  keywords: page.keywords
});

export default function Page() {
  return <ProgramPage slug="acute-sprain" />;
}
