import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/data";
import CaseStudy from "@/components/CaseStudy";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  if (!p) return {};
  const title = p.title.replace("\n", " ");
  return {
    title,
    description: p.summary,
    openGraph: { title: `${title} — Chiran Perera`, description: p.summary },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return <CaseStudy slug={params.slug} />;
}
