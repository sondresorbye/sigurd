import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal animation="fade-up" delay={0}>
            <div>
              <h3 className="text-xl font-bold mb-3">
                <span className="text-brand-red">Ber</span>man
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Enkeltpersonforetak med svennebrev innen ventilasjon og
                blikkenslageri. Tjenester i hele Oslo og omegn.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <div>
              <h4 className="font-semibold mb-3 text-white/90">Sider</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Hjem
                  </Link>
                </li>
                <li>
                  <Link
                    href="/galleri"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Galleri
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div>
              <h4 className="font-semibold mb-3 text-white/90">Kontakt oss</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href="tel:+4748135814" className="hover:text-white transition-colors">
                    481 35 814
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:aamlid@bermanblikk.no"
                    className="hover:text-white transition-colors"
                  >
                    aamlid@bermanblikk.no
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Melumveien 66, 0760 Oslo</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-in" delay={300}>
          <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-white/50 space-y-1">
            <p>Aamlid Berman Blikk &mdash; Org.nr. 937 451 954</p>
            <p>&copy; {new Date().getFullYear()} Berman Blikk. Alle rettigheter reservert.</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
