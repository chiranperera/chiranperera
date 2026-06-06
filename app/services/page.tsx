import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/Pages";

export const metadata: Metadata = {
  title: "Services",
  description: "Five disciplines, one studio — website design + build, brand & visual identity, AI search optimization, social campaigns and AI-driven marketing.",
};

export default function Page() {
  return <ServicesPage />;
}
