import type { Metadata } from "next";
import { WorkPage } from "@/components/pages/Pages";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects, 2024–2026 — AI-native websites, personal brands and booking systems, designed and built end to end.",
};

export default function Page() {
  return <WorkPage />;
}
