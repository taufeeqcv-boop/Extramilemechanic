"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MIN_DISPLAY_MS = 900;
const FADE_OUT_MS = 400;

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible");

  useEffect(() => {
    let mounted = true;
    const start = Date.now();

    const hide = () => {
      if (!mounted) return;
      const elapsed = Date.now() - start;
      const delay = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(() => {
        if (!mounted) return;
        setPhase("fading");
        setTimeout(() => {
          if (mounted) setPhase("gone");
        }, FADE_OUT_MS);
      }, delay);
    };

    if (typeof document !== "undefined" && document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide);
      const t = setTimeout(hide, MIN_DISPLAY_MS + 500);
      return () => {
        mounted = false;
        window.removeEventListener("load", hide);
        clearTimeout(t);
      };
    }

    return () => {
      mounted = false;
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className="loading-screen fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white transition-opacity duration-[var(--loading-fade-ms,400ms)] ease-out"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transitionProperty: "opacity",
        transitionDuration: `${FADE_OUT_MS}ms`,
      }}
      aria-live="polite"
      aria-busy={phase === "visible"}
      role="status"
    >
      <div className="flex flex-col items-center gap-5 px-4">
        {/* Emblem only — circular logo (orange & blue) */}
        <div className="relative h-28 w-28 sm:h-32 sm:w-32">
          <Image
            src="/vesani-emblem.png"
            alt=""
            width={128}
            height={128}
            priority
            className="h-full w-full object-contain"
          />
        </div>
        {/* Manual wording */}
        <div className="flex flex-col items-center leading-tight">
          <span className="text-2xl font-bold uppercase tracking-tight text-brand sm:text-3xl">
            Vesani
          </span>
          <span className="text-sm font-normal uppercase tracking-wide text-text-muted">
            Engineering
          </span>
        </div>
        {/* Loading bar */}
        <div className="mt-1 w-44 overflow-hidden rounded-full bg-bg-subtle sm:w-52">
          <div className="h-1.5 rounded-full bg-brand loading-bar" />
        </div>
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
