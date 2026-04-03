import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | Berman Blikk",
  description:
    "Ta kontakt med Berman Blikk for befaring, tilbud eller uforpliktende samtale. Blikkenslager og taktekker i Oslo og omegn.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-slate-deep text-white section-divider-down">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-copper mb-3">
            Ta kontakt
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Kontakt oss
          </h1>
          <div className="w-12 h-px bg-copper mt-4 mb-4" />
          <p className="text-lg text-white/60 max-w-2xl">
            Ta kontakt med oss for befaring, eller send oss dine tegninger for
            beregning av pris og løsninger. Ta kontakt for en uforpliktende
            samtale.
          </p>
        </div>
      </section>

      <section className="bg-warm-white py-12 sm:py-16 section-divider-up">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-charcoal mb-6">
                Kontaktinformasjon
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-copper/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-copper"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc mb-0.5">
                      Daglig leder
                    </p>
                    <p className="font-medium text-charcoal">Sigurd Aamlid</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-copper/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-copper"
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
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc mb-0.5">
                      Telefon
                    </p>
                    <a
                      href="tel:+4748135814"
                      className="font-medium text-charcoal hover:text-copper transition-colors duration-150"
                    >
                      481 35 814
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-copper/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-copper"
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
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc mb-0.5">
                      E-post
                    </p>
                    <a
                      href="mailto:post@bermanblikk.no"
                      className="font-medium text-charcoal hover:text-copper transition-colors duration-150"
                    >
                      post@bermanblikk.no
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-copper/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-copper"
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
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc mb-0.5">
                      Adresse
                    </p>
                    <p className="font-medium text-charcoal">
                      Melumveien 66, 0760 Oslo
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing note */}
              <div className="mt-8 p-5 bg-stone border-l-[3px] border-copper">
                <h3 className="font-display font-bold text-charcoal mb-2">
                  Om prising
                </h3>
                <p className="text-sm text-zinc leading-relaxed">
                  Timespris ekskluderer moms, materialpris og servicebil. Ta
                  kontakt for en uforpliktende samtale og vi gir deg et estimat
                  basert på ditt prosjekt.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-charcoal mb-6">
                Send oss en melding
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
