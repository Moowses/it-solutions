"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        const sideways = element.matches(".section-header, .intro-line");
        animations.push(element.animate([
          { opacity: 0, transform: sideways ? "translateX(-20px)" : "translateY(24px)" },
          { opacity: 1, transform: "translate(0)" },
        ], { duration: 600, easing: "cubic-bezier(.2,.7,.2,1)" }));
        observer.unobserve(element);
      }
    }, { threshold: 0.08 });
    document.querySelectorAll("main .section-header, main article, main .hero-copy > *, main .text-panel > p, main .process-steps > li, main .proof-project, main .development-hero h1, main .about-hero h1").forEach((element) => observer.observe(element));
    const stop = () => {
      if (preference.matches) { observer.disconnect(); animations.forEach((animation) => animation.cancel()); }
    };
    preference.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", stop);
    };
  }, [pathname]);

  return null;
}
