"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const galleryImages: GalleryImage[] = [
  {
    // Workers installing roof tiles on house under construction (Sergej Karpow, Unsplash)
    src: "https://images.unsplash.com/photo-1763665814657-919dac53ea26?w=800&h=600&fit=crop",
    alt: "Taktekking – legging av takstein",
    caption: "Legging av takstein, rekkehus på Grorud",
  },
  {
    // Two men working on the roof of a house (Immo Wegmann, Unsplash)
    src: "https://images.unsplash.com/photo-1681049400158-0ff6249ac315?w=800&h=600&fit=crop",
    alt: "Ferdig lagt takstein",
    caption: "Omlegging av takstein, enebolig i Bærum",
  },
  {
    // Close-up of rain gutter on a roof (Luke Southern, Unsplash)
    src: "https://images.unsplash.com/photo-1634853982486-c06f0e17940f?w=800&h=600&fit=crop",
    alt: "Takrenner og nedløpsrør",
    caption: "Nye takrenner og nedløpsrør, boligblokk på Østensjø",
  },
  {
    // Workers repairing a damaged roof with debris (Yishen Ji, Unsplash)
    src: "https://images.unsplash.com/photo-1760331840361-d751cfc1becf?w=800&h=600&fit=crop",
    alt: "Beslagsarbeid og pipebeslag",
    caption: "Beslagsarbeid og pipebeslag, nybygg på Lilleaker",
  },
  {
    // Industrial ventilation ductwork installation (Pexels)
    src: "https://images.pexels.com/photos/8297856/pexels-photo-8297856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    alt: "Ventilasjon montering",
    caption: "Ventilasjonsanlegg, næringsbygg på Skøyen",
  },
  {
    // Ventilation duct insulation / lagging (Unsplash)
    src: "https://images.unsplash.com/photo-1759646827242-cf09e30709aa?w=800&h=600&fit=crop",
    alt: "Ventilasjonsisolering",
    caption: "Isolering av ventilasjonskanaler, kontorbygg på Majorstuen",
  },
  {
    // Man working on roof tiles / roof maintenance (Christer Lässman, Unsplash)
    src: "https://images.unsplash.com/photo-1726589004565-bedfba94d3a2?w=800&h=600&fit=crop",
    alt: "Takreparasjon og service",
    caption: "Takreparasjon og lekkasjetetting, borettslag på Stovner",
  },
  {
    // Weathered dormer and brick chimney on a roof (Dariia Lemesheva, Unsplash)
    src: "https://images.unsplash.com/photo-1742166562136-a43aff7de0ad?w=800&h=600&fit=crop",
    alt: "Pipebeslag og luftehatter",
    caption: "Utskifting av pipebeslag og luftehatter, enebolig på Nordstrand",
  },
  {
    // Man standing on the roof of a house – roofing project (Zohair Mirza, Unsplash)
    src: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&h=600&fit=crop",
    alt: "Takbefaring og tilstandsrapport",
    caption: "Årlig ettersyn og tilstandsrapport, næringsbygg på Helsfyr",
  },
];

export default function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isOpen = selectedIndex !== null;
  const selectedImage = selectedIndex !== null ? galleryImages[selectedIndex] : null;

  const goNext = useCallback(() => {
    setSelectedIndex((i) => (i !== null ? (i + 1) % galleryImages.length : null));
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((i) =>
      i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null
    );
  }, []);

  const close = useCallback(() => setSelectedIndex(null), []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, goNext, goPrev, close]);

  // Touch / swipe support
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <ScrollReveal
            key={index}
            animation="fade-up"
            delay={(index % 3) * 100}
          >
            <button
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-200 cursor-pointer text-left"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>

      {isOpen && selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 animate-hero"
          onClick={close}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Lukk"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 sm:left-6 text-white hover:text-gray-300 transition-colors z-10 p-2 rounded-full bg-black/40 hover:bg-black/60"
            aria-label="Forrige bilde"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 sm:right-6 text-white hover:text-gray-300 transition-colors z-10 p-2 rounded-full bg-black/40 hover:bg-black/60"
            aria-label="Neste bilde"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <p className="text-white text-center mt-4 text-lg">
              {selectedImage.caption}
            </p>
            {/* Image counter */}
            <p className="text-white/60 text-center text-sm mt-1">
              {(selectedIndex ?? 0) + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
