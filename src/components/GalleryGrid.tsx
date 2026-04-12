"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ScrollReveal from "@/components/ScrollReveal";

interface GalleryImage {
  src: string;
  alt: string;
  objectPosition?: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/1000029375.jpg",
    alt: "Sigurd på taket med takstein",
  },
  {
    src: "/images/1000029376.jpg",
    alt: "Sigurd sitter på takmønet med utsikt",
  },
  {
    src: "/images/1000029381.jpg",
    alt: "Sigurd ved luftehatt på tak",
  },
  {
    src: "/images/1000029382.jpg",
    alt: "Sigurd på tak med sikkerhetsutstyr",
  },
  {
    src: "/images/42D20209-88AB-4607-8413-58037ADF5009.JPG",
    alt: "Arbeid på tak av tradisjonelt hvitt hus",
    objectPosition: "center 30%",
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
                    style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
                  />
                </div>
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
                style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
              />
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
