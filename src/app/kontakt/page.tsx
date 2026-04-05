import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Kontakt | Berman Blikk",
  description:
    "Ta kontakt med Berman Blikk for befaring, tilbud eller uforpliktende samtale. Blikkenslager og taktekker i Oslo og omegn.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="bg-brand-blue text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="animate-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Kontakt oss
          </h1>
          <p className="animate-hero-delay-1 mt-4 text-lg text-white/80 max-w-2xl">
            Ta kontakt med oss for befaring, eller send oss dine tegninger for
            beregning av pris og løsninger. Ta kontakt for en uforpliktende
            samtale.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <ScrollReveal animation="fade-right" className="lg:col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Kontaktinformasjon
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-brand-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Daglig leder</p>
                      <p className="font-medium text-gray-900">Sigurd Aamlid</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-brand-blue"
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
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Telefon</p>
                      <a
                        href="tel:+4748135814"
                        className="font-medium text-gray-900 hover:text-brand-blue transition-colors"
                      >
                        481 35 814
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-brand-blue"
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
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">E-post</p>
                      <a
                        href="mailto:aamlid@bermanblikk.no"
                        className="font-medium text-gray-900 hover:text-brand-blue transition-colors"
                      >
                        aamlid@bermanblikk.no
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-brand-blue"
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
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Adresse</p>
                      <p className="font-medium text-gray-900">
                        Melumveien 66, 0760 Oslo
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pricing note */}
                <div className="mt-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Om prising
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Timespris ekskluderer moms, materialpris og servicebil. Ta
                    kontakt for en uforpliktende samtale og vi gir deg et estimat
                    basert på ditt prosjekt.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact form */}
            <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-3">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send oss en melding
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
