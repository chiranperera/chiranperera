import type { Metadata } from "next";
import { JournalPage } from "@/components/pages/Pages";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on AI search, brand systems, and building cinematic, citable websites for ambitious brands.",
};

export default function Page() {
  return <JournalPage />;
}
