"use client";
import Slideshow from "@/components/Slideshow";
import { useNav } from "@/components/AppShell";

export default function Home() {
  const { go } = useNav();
  return <Slideshow onOpen={(slug) => go("case:" + slug)} />;
}
