"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Hjem" },
    { href: "/galleri", label: "Galleri" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header className="bg-slate-deep text-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Wordmark with copper diamond accent */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="inline-block w-2.5 h-2.5 bg-copper rotate-45 group-hover:scale-125 transition-transform duration-150" />
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight uppercase">
              Berman
              <span className="text-copper ml-0.5">Blikk</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-150 ${
                  pathname === link.href
                    ? "text-copper"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-copper" />
                )}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="ml-4 bg-copper hover:bg-copper-light text-slate-deep px-5 py-2 text-sm font-bold tracking-wide uppercase transition-all duration-150 chamfer-br"
            >
              Kontakt oss
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors duration-150"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meny"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile fullscreen overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-slate-deep z-40">
          <nav className="flex flex-col items-start px-6 py-8 gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-display text-2xl font-bold tracking-tight uppercase py-3 border-b border-white/5 w-full transition-colors duration-150 ${
                  pathname === link.href
                    ? "text-copper"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="mt-6 bg-copper text-slate-deep px-8 py-4 font-bold tracking-wide uppercase text-lg chamfer-br"
            >
              Kontakt oss
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
