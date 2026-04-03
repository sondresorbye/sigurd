"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=800&h=600&fit=crop",
    alt: "Taktekking prosjekt",
    caption: "Omlegging av takstein, enebolig i Oslo",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    alt: "Beslagsarbeid",
    caption: "Beslagsarbeid og montering på nybygg",
  },
  {
    src: "https://images.unsplash.com/photo-1770277662704-8fc096960eb2?w=800&h=600&fit=crop",
    alt: "Takrenner",
    caption: "Nye takrenner og nedløpsrør",
  },
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
    alt: "Takreparasjon",
    caption: "Takreparasjon og lekkasjetetting",
  },
  {
    src: "https://images.unsplash.com/photo-1590725140246-20acdee442be?w=800&h=600&fit=crop",
    alt: "Skiferstein tak",
    caption: "Skiferstein, villa på Nordstrand",
  },
  {
    src: "https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?w=800&h=600&fit=crop",
    alt: "Ventilasjon",
    caption: "Ventilasjon montering og isolering",
  },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className="group relative aspect-[4/3] overflow-hidden bg-stone cursor-pointer text-left border border-stone-dark hover:border-copper/40 transition-all duration-150 hover:-translate-y-1 hover:shadow-hard"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Caption bar slides up on hover */}
            <div className="absolute bottom-0 left-0 right-0 bg-slate-deep/90 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-200">
              <p className="text-white text-sm font-medium">{image.caption}</p>
            </div>
            {/* Corner accent */}
            <div className="absolute top-3 right-3 w-2 h-2 border border-copper/0 group-hover:border-copper rotate-45 transition-colors duration-200" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-slate-deep/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white/50 hover:text-copper transition-colors duration-150"
              aria-label="Lukk"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <p className="text-white text-center mt-4 text-lg font-display">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
