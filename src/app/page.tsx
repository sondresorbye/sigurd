import Link from "next/link";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Takstein / Skiferstein",
    description:
      "Legging og reparasjon av takstein og skiferstein på alle typer bygg.",
    image:
      "https://images.unsplash.com/photo-1767544050173-e0101f579932?w=600&h=400&fit=crop",
  },
  {
    title: "Takplater / Båndtekking",
    description:
      "Montering av takplater og båndtekking for nye og eksisterende tak.",
    image:
      "https://images.unsplash.com/photo-1711666576531-b39c29414e12?w=600&h=400&fit=crop",
  },
  {
    title: "Beslagsarbeider og produksjon",
    description:
      "Skreddersydde beslag, produksjon og montering etter dine behov.",
    image:
      "https://images.unsplash.com/photo-1763665814485-a0a1b6f51ed7?w=600&h=400&fit=crop",
  },
  {
    title: "Ventilasjon montering",
    description:
      "Enkel ventilasjon montering og prosjektering for boliger og næring.",
    image:
      "https://images.pexels.com/photos/8297856/pexels-photo-8297856.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
  },
  {
    title: "Ventilasjonsisolering",
    description:
      "Isolering av ventilasjonsanlegg for bedre energieffektivitet.",
    image:
      "https://images.unsplash.com/photo-1759646827242-cf09e30709aa?w=600&h=400&fit=crop",
  },
  {
    title: "Takrenner og nedløpsrør",
    description:
      "Montering, reparasjon og vedlikehold av takrenner og nedløpsrør.",
    image:
      "https://images.unsplash.com/photo-1770277662704-8fc096960eb2?w=600&h=400&fit=crop",
  },
  {
    title: "Luftehatter / Pipebeslag",
    description:
      "Montering og utskifting av luftehatter og pipebeslag for god tetting.",
    image:
      "https://images.unsplash.com/photo-1683041717386-91a33191da42?w=600&h=400&fit=crop",
  },
  {
    title: "Snøfangere",
    description:
      "Montering av snøfangere for å sikre taket gjennom vinteren.",
    image:
      "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=600&h=400&fit=crop",
  },
  {
    title: "Takreparasjoner og service",
    description: "Alle typer takreparasjoner og løpende serviceoppdrag.",
    image:
      "https://images.unsplash.com/photo-1726589004565-bedfba94d3a2?w=600&h=400&fit=crop",
  },
  {
    title: "Lekkasjesøking / Tetting",
    description:
      "Effektiv lekkasjesøking og tetting for å beskytte bygget ditt.",
    image:
      "https://images.unsplash.com/photo-1760331840361-d751cfc1becf?w=600&h=400&fit=crop",
  },
  {
    title: "Årlig ettersyn og tilstandsrapporter",
    description: "Regelmessig kontroll og dokumenterte tilstandsrapporter.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    title: "Gratis vurdering",
    description:
      "Vi tar ingen ting for å komme med forslag til løsninger. Få en annenparts mening.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — asymmetric, left-heavy */}
      <section className="bg-slate-deep text-white section-divider-down">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-copper mb-4">
                Blikkenslager &middot; Taktekker &middot; Oslo
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Vi tar et{" "}
                <span className="text-copper">tak</span> for deg
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl">
                Enkeltpersonforetak med svennebrev innen ventilasjon og
                blikkenslager. Over 5 års erfaring i bransjen. Vi utfører alle
                typer tak- og blikkenslagerarbeid i hele Oslo og omegn.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-copper hover:bg-copper-light text-slate-deep px-8 py-3.5 text-base font-bold tracking-wide uppercase transition-all duration-150 chamfer-br"
                >
                  Kontakt oss
                </Link>
                <Link
                  href="/galleri"
                  className="inline-flex items-center justify-center border border-white/20 hover:border-copper text-white hover:text-copper px-8 py-3.5 text-base font-medium tracking-wide uppercase transition-all duration-150"
                >
                  Se våre referanser
                </Link>
              </div>
            </div>
            {/* Decorative grid / construction lines */}
            <div className="hidden lg:block lg:col-span-5" aria-hidden="true">
              <div className="relative w-full aspect-square max-w-xs ml-auto">
                <div className="absolute inset-0 border border-copper/20" />
                <div className="absolute inset-4 border border-copper/10" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-copper/15" />
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-copper/15" />
                <div className="absolute top-6 right-6 w-3 h-3 bg-copper rotate-45" />
                <div className="absolute bottom-6 left-6 w-2 h-2 border border-copper rotate-45" />
                <p className="absolute bottom-4 right-4 font-mono text-[10px] text-copper/40 uppercase tracking-widest">
                  Est. 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-warm-white py-16 sm:py-20 section-divider-up">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-copper mb-3">
              Tjenester
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
              Tjenester i hele Oslo og omegn
            </h2>
            <div className="w-12 h-px bg-copper mt-4 mb-6" />
            <p className="text-lg text-zinc leading-relaxed">
              Vi utfører lekkasjesøking og tetting, årlig ettersyn og
              tilstandsrapporter, og tar ingen ting for å komme med forslag til
              løsninger. Få en annenparts mening helt gratis.
            </p>
          </div>
        </div>
      </section>

      {/* Om Sigurd */}
      <section className="bg-stone py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Portrait with corner marks */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="corner-marks">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 overflow-hidden">
                  <Image
                    src="/images/sigurd-cropped.png"
                    alt="Sigurd Aamlid"
                    fill
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 192px, 224px"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div className="lg:col-span-8">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-copper mb-2">
                Daglig leder
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
                Sigurd Aamlid
              </h2>
              <div className="w-12 h-px bg-copper mt-4 mb-6" />
              <p className="text-lg text-zinc leading-relaxed">
                Med svennebrev innen ventilasjon og blikkenslager og over{" "}
                <strong className="text-charcoal">5 års erfaring</strong> fra to
                anerkjente aktører i bransjen, har Sigurd vært involvert i alt
                fra mindre reparasjoner til store prosjekter for borettslag og
                næringseiendom, til sammen godt over{" "}
                <strong className="text-charcoal">150 oppdrag</strong>.
              </p>
              <p className="mt-3 text-lg text-zinc leading-relaxed">
                Med Berman Blikk får du direkte kontakt med fagpersonen som
                utfører jobben, rask befaring og tett oppfølging fra start til
                slutt.
              </p>
            </div>
          </div>

          {/* Stats row — spec-sheet style */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-stone-dark">
            {[
              { value: "5+", label: "Års erfaring" },
              { value: "150+", label: "Oppdrag utført" },
              { value: "100%", label: "Personlig oppfølging" },
              { value: "Oslo", label: "Og hele omegn" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-warm-white p-6 sm:p-8 text-center"
              >
                <p className="font-mono text-3xl sm:text-4xl font-bold text-copper">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-zinc font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-warm-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-copper mb-3">
              Hva vi gjør
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
              Våre tjenester
            </h2>
            <div className="w-12 h-px bg-copper mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white border border-stone-dark hover:border-copper/40 transition-all duration-150 hover:-translate-y-1 hover:shadow-hard overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden bg-stone">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Copper overlay on hover */}
                  <div className="absolute inset-0 bg-copper/0 group-hover:bg-copper/10 transition-colors duration-300" />
                </div>
                <div className="p-5 border-t-[3px] border-copper/0 group-hover:border-copper transition-colors duration-150">
                  <h3 className="font-display text-base font-bold text-charcoal mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-zinc text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional services — featured card */}
      <section className="bg-stone py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-deep p-8 sm:p-12 text-white chamfer-br relative overflow-hidden">
            {/* Decorative corner */}
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-10"
              aria-hidden="true"
            >
              <div className="absolute top-4 right-4 w-full h-full border border-copper" />
              <div className="absolute top-8 right-8 w-full h-full border border-copper" />
            </div>

            <div className="relative max-w-2xl">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-copper mb-3">
                Ekstra tjenester
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                Også andre fysiske oppdrag
              </h2>
              <div className="w-12 h-px bg-copper mb-6" />
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Vi tar også på oss andre fysiske arbeidsoppgaver, for eksempel
                bortkjøring, enkel maling, med mer. Ta kontakt for å høre hva vi
                kan hjelpe deg med!
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-copper hover:bg-copper-light text-slate-deep px-8 py-3.5 text-base font-bold tracking-wide uppercase transition-all duration-150"
              >
                Ta kontakt for en uforpliktende samtale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-warm-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Klar for å komme i gang?
          </h2>
          <div className="w-12 h-px bg-copper mx-auto mb-6" />
          <p className="text-lg text-zinc max-w-2xl mx-auto mb-8">
            Ta kontakt med oss for befaring, eller send oss dine tegninger for
            beregning av pris og løsninger.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center bg-copper hover:bg-copper-light text-slate-deep px-8 py-3.5 text-lg font-bold tracking-wide uppercase transition-all duration-150 chamfer-br"
          >
            Kontakt oss i dag
          </Link>
        </div>
      </section>
    </>
  );
}
