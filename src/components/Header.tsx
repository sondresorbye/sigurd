"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Hjem" },
    { href: "/galleri", label: "Tidligere prosjekter" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header className="bg-brand-blue text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center group" aria-label="Berman Blikk – hjem">
            <Image
              src="/logo-dark-bg.svg"
              alt="Berman Blikk"
              width={359}
              height={98}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  link.href === "/kontakt"
                    ? "ml-3 bg-brand-red hover:bg-brand-red-dark text-white"
                    : pathname === link.href
                      ? "bg-white/15 text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <nav aria-label="Sider" className="md:hidden h-10 border-t border-white/10 flex items-center justify-between gap-1 text-xs sm:text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`px-2 py-2 rounded-md font-medium whitespace-nowrap transition-colors ${
                pathname === link.href
                  ? "bg-white/15 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
