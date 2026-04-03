import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Galleri | Berman Blikk",
  description:
    "Se referanser og bilder fra våre fullførte prosjekter innen tak, blikkenslagerarbeid og ventilasjon i Oslo og omegn.",
};

export default function GalleriPage() {
  return (
    <>
      <section className="bg-brand-blue text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Galleri
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Her er et utvalg av jobber vi har utført. Ta gjerne kontakt for
            referanser eller mer informasjon om våre prosjekter.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Bildene er plassholdere. Ekte prosjektbilder kommer snart.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
