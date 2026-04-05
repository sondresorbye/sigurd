"use client";

import Image from "next/image";
import { useState } from "react";
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
    // Construction workers installing roof tiles on new building (Sergej Karpow, Unsplash)
    src: "https://images.unsplash.com/photo-1763665814965-b5c4b3547908?w=800&h=600&fit=crop",
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
    // Workers installing roof tiles / sheet metal work on roof (Sergej Karpow, Unsplash)
    src: "https://images.unsplash.com/photo-1763665814485-a0a1b6f51ed7?w=800&h=600&fit=crop",
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
    // Professional chimney inspection on rooftop (Pexels)
    src: "https://images.pexels.com/photos/34020199/pexels-photo-34020199.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    alt: "Takbefaring og tilstandsrapport",
    caption: "Årlig ettersyn og tilstandsrapport, næringsbygg på Helsfyr",
  },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

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
              onClick={() => setSelectedImage(image)}
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

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 animate-hero"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Lukk"
            >
              <svg
                className="w-8 h-8"
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
          </div>
        </div>
      )}
    </>
  );
}
