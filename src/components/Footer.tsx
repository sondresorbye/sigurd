import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-dark text-white mt-auto">
      {/* Top rule accent */}
      <div className="h-px bg-copper/30" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-block w-2 h-2 bg-copper rotate-45" />
              <span className="font-display text-lg font-bold tracking-tight uppercase">
                Berman
                <span className="text-copper ml-0.5">Blikk</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Enkeltpersonforetak med svennebrev innen ventilasjon og
              blikkenslager. Tjenester i hele Oslo og omegn.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-copper mb-4">
              Sider
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/", label: "Hjem" },
                { href: "/galleri", label: "Galleri" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-copper transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-copper mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 shrink-0 text-copper/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+4748135814"
                  className="hover:text-copper transition-colors duration-150"
                >
                  481 35 814
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 shrink-0 text-copper/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:post@bermanblikk.no"
                  className="hover:text-copper transition-colors duration-150"
                >
                  post@bermanblikk.no
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 shrink-0 mt-0.5 text-copper/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Melumveien 66, 0760 Oslo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-mono">
            &copy; {new Date().getFullYear()} Berman Blikk
          </p>
          <p className="text-xs text-white/30 font-mono">
            Blikkenslager &middot; Taktekker &middot; Ventilasjon
          </p>
        </div>
      </div>
    </footer>
  );
}
