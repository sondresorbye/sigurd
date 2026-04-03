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
      <section className="bg-slate-deep text-white section-divider-down">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-copper mb-3">
            Referanser
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Galleri
          </h1>
          <div className="w-12 h-px bg-copper mt-4 mb-4" />
          <p className="text-lg text-white/60 max-w-2xl">
            Her er et utvalg av jobber vi har utført. Ta gjerne kontakt for
            referanser eller mer informasjon om våre prosjekter.
          </p>
        </div>
      </section>

      <section className="bg-warm-white py-12 sm:py-16 section-divider-up">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <GalleryGrid />
          <div className="mt-12 text-center">
            <p className="text-zinc text-sm font-mono">
              Bildene er plassholdere. Ekte prosjektbilder kommer snart.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
