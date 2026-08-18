"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/portfolio";

export function SiteHeader() {
  const pathname = usePathname();
  const [isCompact, setIsCompact] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsCompact(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`site-header${isCompact ? " is-compact" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="brand" onClick={() => setIsOpen(false)}>
          <span>Karl Mosses IT Solutions</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          Menu
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${isOpen ? " is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => {
            const itemPath = item.href.split("#")[0] || "/";
            const isSectionLink = item.href.includes("#");
            const isActive =
              !isSectionLink &&
              (itemPath === "/" ? pathname === "/" : pathname === itemPath || pathname.startsWith(`${itemPath}/`));

            if (item.href.startsWith("/")) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={isActive ? "is-active" : undefined}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
