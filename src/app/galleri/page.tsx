import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Tidligere prosjekter | Berman Blikk",
  description:
    "Se bilder fra våre fullførte prosjekter innen tak, blikkenslagerarbeid og ventilasjon i Oslo og omegn.",
};

export default function GalleriPage() {
  return (
    <>
      <section className="bg-brand-blue text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="animate-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Tidligere prosjekter
          </h1>
          <p className="animate-hero-delay-1 mt-4 text-lg text-white/80 max-w-2xl">
            Her er et utvalg av jobber vi har utført innen tak, beslag og
            ventilasjon. Ta gjerne kontakt for referanser eller mer informasjon.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
