"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useState } from "react";
import {
  contactEmail,
  navItems as defaultNavItems,
  ownerName,
} from "@/lib/portfolio";

type NavItem = {
  href: string;
  label: string;
};

type MainLayoutProps = {
  children: ReactNode;
  navItems?: readonly NavItem[];
};

export function MainLayout({
  children,
  navItems = defaultNavItems,
}: MainLayoutProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-white font-sans text-gray-950 antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-gray-950 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/70 backdrop-blur-md">
        <nav
          className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className="flex min-h-11 items-center text-sm font-semibold text-gray-950"
            onClick={() => setIsOpen(false)}
          >
            {ownerName}
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                isActive={isActivePath(pathname, item.href)}
              />
            ))}
          </div>

          <Link
            href={`mailto:${contactEmail}`}
            className="hidden min-h-11 items-center rounded-md bg-gray-950 px-4 text-sm font-semibold text-white motion-safe:transition hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 lg:inline-flex"
          >
            Start a conversation
          </Link>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-gray-200 text-gray-950 motion-safe:transition hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            <MenuIcon isOpen={isOpen} />
          </button>
        </nav>

        {isOpen ? (
          <div className="border-t border-gray-200 bg-white/95 px-6 py-4 backdrop-blur-md lg:hidden">
            <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  isActive={isActivePath(pathname, item.href)}
                  onClick={() => setIsOpen(false)}
                />
              ))}
              <Link
                href={`mailto:${contactEmail}`}
                className="mt-2 inline-flex min-h-11 items-center justify-center rounded-md bg-gray-950 px-4 text-sm font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                Start a conversation
              </Link>
            </nav>
          </div>
        ) : null}
      </header>

      <main id="main-content">{children}</main>

      <footer className="border-t border-white/10 bg-gray-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-gray-300 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>{ownerName} - IT business solutions</p>
          <a
            href={`mailto:${contactEmail}`}
            className="font-semibold text-white underline-offset-4 hover:underline"
          >
            {contactEmail}
          </a>
        </div>
      </footer>
    </div>
  );
}

function NavLink({
  item,
  isActive,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={[
        "inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium motion-safe:transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2",
        isActive
          ? "bg-gray-950 text-white"
          : "text-gray-700 hover:bg-gray-100 hover:text-gray-950",
      ].join(" ")}
    >
      {item.label}
    </Link>
  );
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {isOpen ? (
        <path d="m6 6 12 12M18 6 6 18" />
      ) : (
        <path d="M5 7h14M5 12h14M5 17h14" />
      )}
    </svg>
  );
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  const pathOnly = href.split("#")[0];
  return pathOnly ? pathname === pathOnly : false;
}
