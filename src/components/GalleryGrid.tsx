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
    // Workers installing roof tiles on a house under construction
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    alt: "Taktekking – legging av takstein",
    caption: "Legging av takstein, rekkehus på Grorud",
  },
  {
    // Close-up of roof tiles / completed tile roof
    src: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=800&h=600&fit=crop",
    alt: "Ferdig lagt takstein",
    caption: "Omlegging av takstein, enebolig i Bærum",
  },
  {
    // Gutter and downpipe on a roof
    src: "https://images.unsplash.com/photo-1770277662704-8fc096960eb2?w=800&h=600&fit=crop",
    alt: "Takrenner og nedløpsrør",
    caption: "Nye takrenner og nedløpsrør, boligblokk på Østensjø",
  },
  {
    // Sheet metal flashing / beslag work on roof
    src: "https://images.unsplash.com/photo-1763665814485-a0a1b6f51ed7?w=800&h=600&fit=crop",
    alt: "Beslagsarbeid og pipebeslag",
    caption: "Beslagsarbeid og pipebeslag, nybygg på Lilleaker",
  },
  {
    // Ventilation duct installation indoors
    src: "https://images.pexels.com/photos/8297856/pexels-photo-8297856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    alt: "Ventilasjon montering",
    caption: "Ventilasjonsanlegg, næringsbygg på Skøyen",
  },
  {
    // Ventilation insulation / lagging on ducts
    src: "https://images.unsplash.com/photo-1759646827242-cf09e30709aa?w=800&h=600&fit=crop",
    alt: "Ventilasjonsisolering",
    caption: "Isolering av ventilasjonskanaler, kontorbygg på Majorstuen",
  },
  {
    // Roof repair / maintenance work on roof
    src: "https://images.unsplash.com/photo-1726589004565-bedfba94d3a2?w=800&h=600&fit=crop",
    alt: "Takreparasjon og service",
    caption: "Takreparasjon og lekkasjetetting, borettslag på Stovner",
  },
  {
    // Roof chimney flashing / luftehatt detail
    src: "https://images.unsplash.com/photo-1683041717386-91a33191da42?w=800&h=600&fit=crop",
    alt: "Luftehatter og pipebeslag",
    caption: "Utskifting av luftehatter, enebolig på Nordstrand",
  },
  {
    // Inspector / surveyor on roof – annual inspection
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
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
