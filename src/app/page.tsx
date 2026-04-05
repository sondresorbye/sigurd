import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

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
    image: "https://images.unsplash.com/photo-1767544050173-e0101f579932?w=600&h=400&fit=crop",
  },
  {
    title: "Takplater / Båndtekking",
    description:
      "Montering av takplater og båndtekking for nye og eksisterende tak.",
    image: "https://images.unsplash.com/photo-1711666576531-b39c29414e12?w=600&h=400&fit=crop",
  },
  {
    title: "Beslagsarbeider og produksjon",
    description:
      "Skreddersydde beslag, produksjon og montering etter dine behov.",
    image: "https://images.unsplash.com/photo-1763665814485-a0a1b6f51ed7?w=600&h=400&fit=crop",
  },
  {
    title: "Ventilasjon montering",
    description:
      "Enkel ventilasjon montering og prosjektering for boliger og næring.",
    image: "https://images.pexels.com/photos/8297856/pexels-photo-8297856.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
  },
  {
    title: "Ventilasjonsisolering",
    description: "Isolering av ventilasjonsanlegg for bedre energieffektivitet.",
    image: "https://images.unsplash.com/photo-1684073891328-a97d7eb6eadd?w=600&h=400&fit=crop",
  },
  {
    title: "Takrenner og nedløpsrør",
    description:
      "Montering, reparasjon og vedlikehold av takrenner og nedløpsrør.",
    image: "https://images.unsplash.com/photo-1770277662704-8fc096960eb2?w=600&h=400&fit=crop",
  },
  {
    title: "Luftehatter / Pipebeslag",
    description:
      "Montering og utskifting av luftehatter og pipebeslag for god tetting.",
    image: "https://images.unsplash.com/photo-1683041717386-91a33191da42?w=600&h=400&fit=crop",
  },
  {
    title: "Snøfangere",
    description:
      "Montering av snøfangere for å sikre taket gjennom vinteren.",
    image: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=600&h=400&fit=crop",
  },
  {
    title: "Takreparasjoner og service",
    description:
      "Alle typer takreparasjoner og løpende serviceoppdrag.",
    image: "https://images.unsplash.com/photo-1726589004565-bedfba94d3a2?w=600&h=400&fit=crop",
  },
  {
    title: "Lekkasjesøking / Tetting",
    description:
      "Effektiv lekkasjesøking og tetting for å beskytte bygget ditt.",
    image: "https://images.unsplash.com/photo-1760331840361-d751cfc1becf?w=600&h=400&fit=crop",
  },
  {
    title: "Årlig ettersyn og tilstandsrapporter",
    description:
      "Regelmessig kontroll og dokumenterte tilstandsrapporter.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    title: "Gratis vurdering",
    description:
      "Vi tar ingen ting for å komme med forslag til løsninger. Få en annenparts mening.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-blue text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="animate-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Vi tar i et{" "}
              <span className="text-brand-red">tak</span> for deg
            </h1>
            <p className="animate-hero-delay-1 mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
              Enkeltpersonforetak med svennebrev innen ventilasjon og
              blikkenslageri. Over 5 års erfaring i bransjen. Vi utfører alle
              typer tak- og blikkenslageri-arbeid i hele Oslo og omegn.
            </p>
            <div className="animate-hero-delay-2 mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3.5 rounded-md text-base font-semibold transition-colors"
              >
                Kontakt oss
              </Link>
              <Link
                href="/galleri"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-md text-base font-semibold transition-colors border border-white/20"
              >
                Se våre referanser
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Tjenester i hele Oslo og omegn
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={120}>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Vi utfører lekkasjesøking og tetting, årlig ettersyn og
              tilstandsrapporter, og tar ingen ting for å komme med forslag til
              løsninger. Få en annenparts mening helt gratis.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Om Sigurd */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal animation="scale-up">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-8 rounded-full overflow-hidden shadow-lg border-4 border-brand-blue/10">
                <Image
                  src="/images/sigurd-cropped.png"
                  alt="Sigurd Aamlid"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 192px, 224px"
                  priority
                />
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <p className="text-sm font-semibold text-brand-red uppercase tracking-wide mb-2">
                Daglig leder
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Sigurd Aamlid
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Med svennebrev innen ventilasjon og blikkenslageri og over{" "}
                <strong className="text-gray-900">5 års erfaring</strong> fra to
                anerkjente aktører i bransjen, har Sigurd vært involvert i alt fra
                mindre reparasjoner til store prosjekter for borettslag og
                næringseiendom, til sammen godt over{" "}
                <strong className="text-gray-900">1 000 prosjekter</strong>.
              </p>
              <p className="mt-3 text-lg text-gray-600 leading-relaxed">
                Med Berman Blikk får du direkte kontakt med fagpersonen som
                utfører jobben, rask befaring og tett oppfølging fra start til
                slutt.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
            {[
              { value: "5+", label: "Års erfaring" },
              { value: "1000+", label: "Prosjekter utført" },
              { value: "100%", label: "Personlig oppfølging" },
              { value: "Oslo", label: "Og hele omegn" },
            ].map((stat, i) => (
              <ScrollReveal
                key={stat.label}
                animation="fade-up"
                delay={i * 100}
              >
                <div className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-sm border border-gray-100">
                  <p className="stat-value text-3xl sm:text-4xl font-extrabold text-brand-blue">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm sm:text-base text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
              Våre tjenester
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal
                key={service.title}
                animation="fade-up"
                delay={(i % 3) * 100}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                  <div className="relative h-44 overflow-hidden bg-gray-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="bg-brand-blue rounded-xl p-8 sm:p-12 text-white">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Også andre fysiske oppdrag
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Vi tar også på oss andre fysiske arbeidsoppgaver, for eksempel
                  bortkjøring, enkel maling, med mer. Ta kontakt for å høre hva vi
                  kan hjelpe deg med!
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3.5 rounded-md text-base font-semibold transition-colors"
                >
                  Ta kontakt for en uforpliktende samtale
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Klar for å komme i gang?
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Ta kontakt med oss for befaring, eller send oss dine tegninger for
              beregning av pris og løsninger.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="scale-up" delay={200}>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3.5 rounded-md text-lg font-semibold transition-colors"
            >
              Kontakt oss i dag
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
