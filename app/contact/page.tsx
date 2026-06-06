import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/Pages";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's build something unforgettable. Available Q3 2026 — get in touch to start a project.",
};

export default function Page() {
  return <ContactPage />;
}
