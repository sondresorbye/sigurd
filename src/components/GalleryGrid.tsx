"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ScrollReveal from "@/components/ScrollReveal";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const galleryImages: GalleryImage[] = [
  {
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
    src: "https://images.pexels.com/photos/8297856/pexels-photo-8297856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    alt: "Ventilasjon montering",
    caption: "Ventilasjonsanlegg, næringsbygg på Skøyen",
  },
  {
    src: "https://images.unsplash.com/photo-1759646827242-cf09e30709aa?w=800&h=600&fit=crop",
    alt: "Ventilasjonsisolering",
    caption: "Isolering av ventilasjonskanaler, kontorbygg på Majorstuen",
  },
  {
    src: "https://images.unsplash.com/photo-1726589004565-bedfba94d3a2?w=800&h=600&fit=crop",
    alt: "Takreparasjon og service",
    caption: "Takreparasjon og lekkasjetetting, borettslag på Stovner",
  },
  {
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

function LightboxCarousel({
  startIndex,
  onClose,
}: {
  startIndex: number;
  onClose: () => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex,
    loop: true,
    dragFree: false,
  });

  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [canScrollPrev, setCanScrollPrev] = useState(true);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, scrollPrev, scrollNext]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center animate-hero"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 z-10">
        <span className="text-white/70 text-sm font-medium tabular-nums">
          {currentIndex + 1} / {galleryImages.length}
        </span>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors p-1"
          aria-label="Lukk"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-5xl px-4 sm:px-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 flex flex-col items-center justify-center"
              >
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={Math.abs(index - startIndex) <= 1}
                  />
                </div>
                <p className="text-white text-center mt-4 text-base sm:text-lg px-4">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prev / Next buttons (hidden on small touch screens, visible on hover on larger) */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors disabled:opacity-30 disabled:cursor-default"
        aria-label="Forrige bilde"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors disabled:opacity-30 disabled:cursor-default"
        aria-label="Neste bilde"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="flex gap-1.5 mt-5">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-white"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Gå til bilde ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

      {selectedIndex !== null && (
        <LightboxCarousel
          startIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
}
