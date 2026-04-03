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
  ];

  return (
    <header className="bg-brand-blue text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              <span className="text-brand-red">Ber</span>
              <span className="text-white">man</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-white/15 text-white"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="ml-3 bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors"
            >
              Kontakt oss
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-white/15 text-white"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 text-center bg-brand-red hover:bg-brand-red-dark text-white px-4 py-3 rounded-md text-base font-semibold transition-colors"
            >
              Kontakt oss
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
