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
        animations.push(element.animate([
          { opacity: 0.7, transform: "translateY(12px)" },
          { opacity: 1, transform: "translate(0)" },
        ], { duration: 360, easing: "cubic-bezier(.2,.7,.2,1)" }));
        observer.unobserve(element);
      }
    }, { threshold: 0.08 });
    document.querySelectorAll("main .section-header, main article, main .editorial-heading, main .personal-title, main .contact-copy, main .engagement-process > li, main .text-panel > p").forEach((element) => observer.observe(element));
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
