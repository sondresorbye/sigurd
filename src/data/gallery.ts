export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
}

/** All real project photos, shown in the gallery and as homepage previews. */
export const galleryImages: GalleryImage[] = [
  {
    src: "/images/42D20209-88AB-4607-8413-58037ADF5009.JPG",
    alt: "Takarbeid på tradisjonelt hvitt trehus med skifertak",
    caption: "Takarbeid på skifertak",
    objectPosition: "center 30%",
  },
  {
    src: "/images/1000029376.jpg",
    alt: "Takarbeid på teglsteinstak med utsikt over boligområde",
    caption: "Teglsteinstak i boligområde",
  },
  {
    src: "/images/1000029379.jpg",
    alt: "Montering og kontroll av snøfangere på teglsteinstak",
    caption: "Snøfangere og takarbeid",
  },
  {
    src: "/images/1000029375.jpg",
    alt: "Sikkerhetsarbeid på tak med takstein",
    caption: "Takstein og sikring",
  },
  {
    src: "/images/1000029381.jpg",
    alt: "Arbeid ved luftehatt på tak",
    caption: "Luftehatt og beslag",
  },
  {
    src: "/images/1000029382.jpg",
    alt: "Takreparasjon med sikkerhetsutstyr",
    caption: "Takreparasjon og service",
  },
  {
    src: "/images/24046B2D-04DE-4C61-A4F3-10106A36A73E.JPG",
    alt: "Håndlagde metallroser i stål, messing og kobber",
    caption: "Håndlagde metallroser",
    objectPosition: "center 35%",
  },
  {
    src: "/images/8FFE8AEF-B712-4018-BB3B-0EB403585176.JPG",
    alt: "Håndlaget kobberkopp og metallrose",
    caption: "Kobberarbeid",
  },
  {
    src: "/images/4194D153-BA41-4449-AF83-5224E684BC40.JPG",
    alt: "Håndlaget metalltrakt i blikk",
    caption: "Blikkenslagerarbeid",
  },
  {
    src: "/images/1000026674.jpg",
    alt: "Metallskulptur formet som et dragehode",
    caption: "Skreddersydd metallarbeid",
    objectPosition: "center top",
  },
];

export const featuredProjectImages = galleryImages.slice(0, 6);
