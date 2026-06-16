"use client";
/* AppShell — global chrome + navigation context.
   Wraps every page (mounted once in the root layout). Replaces the
   prototype's state-router with real Next.js routes, keeping the
   branded preloader, custom cursor, field, overlay menu, page-wipe
   transition, and the home-only fullscreen scroll lock. */
import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Field, Header, Overlay } from "@/components/chrome/Chrome";
import { Cursor, Preloader } from "@/components/chrome/Effects";

type NavCtx = {
  go: (route: string) => void;
  prefetch: (route: string) => void;
  openMenu: () => void;
  closeMenu: () => void;
};

const Ctx = React.createContext<NavCtx | null>(null);

export function useNav(): NavCtx {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("useNav must be used within <AppShell>");
  return ctx;
}

function routeToUrl(route: string): string {
  if (route === "home") return "/";
  if (route.startsWith("case:")) return "/projects/" + route.slice(5);
  return "/" + route;
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [menu, setMenu] = React.useState(false);
  const [wipe, setWipe] = React.useState(false);
  const isHome = pathname === "/";
  // The back chevron is a "go up to the parent level" control, so it only shows
  // on case-study pages (→ the projects archive). Top-level pages (projects,
  // studio, services, journal, contact) have home as their parent, which the
  // logo already handles — and a chevron there overlapped the archive filters.
  const isCase = pathname.startsWith("/projects/");

  const closeMenu = React.useCallback(() => setMenu(false), []);
  const openMenu = React.useCallback(() => setMenu(true), []);

  const go = React.useCallback((route: string) => {
    setMenu(false);
    const url = routeToUrl(route);
    if (url === pathname) { window.scrollTo(0, 0); return; }
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { router.push(url); return; }
    setWipe(true);
    window.setTimeout(() => { router.push(url); }, 420);
    window.setTimeout(() => setWipe(false), 900);
  }, [pathname, router]);

  // Warm the route (JS chunk + RSC payload) ahead of the click so the first
  // navigation isn't paying a cold network fetch under the wipe animation.
  const prefetch = React.useCallback((route: string) => {
    router.prefetch(routeToUrl(route));
  }, [router]);

  // Home is a fixed/fullscreen slideshow → lock body scroll; inner pages scroll.
  React.useEffect(() => {
    document.body.style.overflow = isHome ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isHome]);

  const value = React.useMemo<NavCtx>(() => ({ go, prefetch, openMenu, closeMenu }), [go, prefetch, openMenu, closeMenu]);

  return (
    <Ctx.Provider value={value}>
      <Preloader />
      <Cursor />
      <Field />
      <Header showBack={isCase} backTo="projects" backLabel="Back to projects" />
      {children}
      <Overlay open={menu} onClose={closeMenu} />
      {wipe && <div className="wipe run"><span className="mk">CHIRAN<span className="dot">.</span></span></div>}
    </Ctx.Provider>
  );
}
