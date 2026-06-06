import type { Metadata } from "next";
import { WorkPage } from "@/components/pages/Pages";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work, 2024–2026 — cinematic, AI-native websites and brand systems for hospitality, wellness, beauty and lifestyle brands.",
};

export default function Page() {
  return <WorkPage />;
}
