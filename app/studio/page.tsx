import type { Metadata } from "next";
import { StudioPage } from "@/components/pages/Pages";

export const metadata: Metadata = {
  title: "Studio",
  description: "Design meets intelligence. A one-designer studio in Colombo building cinematic, AI-native websites — strategy, design, build and deploy, with no agency layers in between.",
};

export default function Page() {
  return <StudioPage />;
}
