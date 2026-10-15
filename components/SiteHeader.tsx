"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { navItems } from "@/lib/portfolio";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && isOpen) { setIsOpen(false); menuRef.current?.focus(); }
    }}>
      <div className="container nav-inner">
        <Link href="/" className="brand" onClick={() => setIsOpen(false)}>
          <span>Karl Mosses<span className="brand-description">IT Leadership &amp; Business Solutions</span></span>
        </Link>

        <button
          type="button"
          ref={menuRef}
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
