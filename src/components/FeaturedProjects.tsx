import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { featuredProjectImages } from "@/data/gallery";

export default function FeaturedProjects() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Utvalgte prosjekter
          </h2>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto text-center mb-12">
            Et utvalg av takarbeid, beslag og metallarbeid vi har utført.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjectImages.map((image, i) => (
            <ScrollReveal
              key={image.src}
              animation="fade-up"
              delay={(i % 3) * 100}
            >
              <Link href="/galleri" className="group block">
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={`${image.objectFit === "contain" ? "object-contain bg-gray-100" : "object-cover"} transition-transform duration-300 ${image.objectFit === "contain" ? "" : "group-hover:scale-105"}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={
                      image.objectPosition
                        ? { objectPosition: image.objectPosition }
                        : undefined
                    }
                  />
                </div>
                <p className="mt-2.5 text-sm font-medium text-gray-800">
                  {image.caption}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={150}>
          <div className="mt-10 text-center">
            <Link
              href="/galleri"
              className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-3.5 rounded-md text-base font-semibold transition-colors"
            >
              Se alle prosjekter
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
