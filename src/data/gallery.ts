export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
  /** Default cover. Use contain to show the whole subject (e.g. full chimney). */
  objectFit?: "cover" | "contain";
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/prosjekt-svart-hus.jpg",
    alt: "Moderne hus med svart takstein og svarte pipebeslag",
    caption: "Svart tak og pipebeslag",
  },
  {
    src: "/images/prosjekt-takmoene.jpg",
    alt: "Takmøne med to svarte pipebeslag",
    caption: "Takmøne og piper",
    objectFit: "contain",
  },
  {
    src: "/images/prosjekt-pipebeslag.jpg",
    alt: "Svart pipebeslag i blikk på teglsteinstak",
    caption: "Pipebeslag",
    objectFit: "contain",
  },
  {
    src: "/images/prosjekt-luftehatt.jpg",
    alt: "Svart pipebeslag med luftehatt på tak",
    caption: "Luftehatt og pipebeslag",
    objectFit: "contain",
  },
  {
    src: "/images/prosjekt-pipe-detalj.jpg",
    alt: "Svart pipebeslag tilpasset takstein",
    caption: "Pipebeslag, detalj",
    objectFit: "contain",
  },
  {
    src: "/images/prosjekt-takrenner.jpg",
    alt: "Nye svarte takrenner montert langs takfot",
    caption: "Takrenner",
    objectPosition: "left center",
  },
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

/** Homepage strip: the black-roof job, without the gutter shot from the scaffold. */
export const featuredProjectImages = galleryImages.slice(0, 5);
