export type Resort = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  heroTagline: string;
  experienceTitle: string;
  experienceText: string;
  accommodationTitle: string;
  accommodationText: string;
  logoMark: string;
  logoSrc?: string;
  hero: string;
  introImage: string;
  gallery: string[];
  accommodation: { title: string; guests: string; image: string }[];
  restaurant: {
    title: string;
    text: string;
    image: string;
    detailImages: string[];
  };
  contact: { phone: string; email: string; location: string };
  features: {
    label: string;
    icon: "mountain" | "bed" | "food" | "ger" | "leaf" | "sun";
  }[];
  theme: { accent: string; dark: string; light: string };
};

const asset = (resort: string, file: string) => `/images/${resort}/${file}`;
const assets = (resort: string, files: string[]) =>
  files.map((file) => asset(resort, file));

export const resorts: Resort[] = [
  {
    slug: "hoyor-zagal",
    name: "HOYOR ZAGAL",
    subtitle: " LODGE",
    description:
      "A peaceful countryside escape surrounded by open steppe, fresh air and authentic Mongolian hospitality.",
    heroTagline: "A private mountain escape",
    experienceTitle: "More Than a Stay, It’s an Experience",
    experienceText:
      "Wake up to fresh steppe air, discover warm hospitality, and enjoy easy evenings under the wide Mongolian sky.",
    accommodationTitle: "Rest well, wake up close to nature.",
    accommodationText:
      "Choose a comfortable private stay with room to rest after a day outdoors. Each space is arranged for an easy, quiet countryside escape.",
    logoMark: "⌁",
    logoSrc: "/images/hoyorzagal/logo.png",
    hero: asset("hoyorzagal", "a2.JPG"),
    introImage: asset("hoyorzagal", "30.JPG"),
    gallery: assets("hoyorzagal", [
      "CDL_7500.JPG",
      "CDL_7823.JPG",
      "CDL_7830.JPG",
      "1.JPG",
      "2.JPG",
      "3.JPG",
      "g1.JPG",
      "g2.JPG",
      "g3.JPG",
      "g4.JPG",
      "g5.JPG",
      "g6.JPG",
      "g7.JPG",
    ]),
    accommodation: [
      {
        title: "Standard Room",
        guests: "2 Guests",
        image: asset("hoyorzagal", "a1.JPG"),
      },
      {
        title: "Deluxe Room",
        guests: "2–3 Guests",
        image: asset("hoyorzagal", "a2.JPG"),
      },
      {
        title: "Family Cabin",
        guests: "4 Guests",
        image: asset("hoyorzagal", "a3.JPG"),
      },
      ...[
        "a5.JPG",
        "a6.JPG",
        "a7.JPG",
        "a8.JPG",
        "a9.JPG",
        "a10.JPG",
        "a11.JPG",
      ].map((file, index) => ({
        title: `Accommodation ${index + 5}`,
        guests: "2–4 Guests",
        image: asset("hoyorzagal", file),
      })),
    ],
    restaurant: {
      title: "Local Flavors, Fresh from Nature",
      text: "Enjoy Mongolian and international cuisine made from fresh, local ingredients in a warm dining room overlooking the valley.",
      image: asset("hoyorzagal", "r1.JPG"),
      detailImages: [
        asset("hoyorzagal", "r2.JPG"),
        asset("hoyorzagal", "r3.JPG"),
        asset("hoyorzagal", "r4.JPG"),
      ],
    },
    contact: {
      phone: "+976 9998 4593",
      email: "info@hoyorzagal.mn",
      location: "ELSEN TASARKHAI",
    },
    features: [
      { label: "Mountain Views", icon: "mountain" },
      { label: "Luxury Rooms", icon: "bed" },
      { label: "Local Cuisine", icon: "food" },
      { label: "Traditional Gers", icon: "ger" },
      { label: "Eco Friendly", icon: "leaf" },
      { label: "Comfort & Peace", icon: "sun" },
    ],
    theme: { accent: "#d7ad73", dark: "#2b1a10", light: "#f4ede2" },
  },
  {
    slug: "alungoo-ger-hotel",
    name: "ALUNGOO",
    subtitle: "GER HOTEL",
    description:
      "A refined ger stay in the dramatic landscapes of Gorkhi–Terelj National Park, close to nature and the city.",
    heroTagline: "A quiet ger retreat in the wild",
    experienceTitle: "Stay Close to Nature, Far from Noise",
    experienceText:
      "Wake up with mountain views, gather around the fire, and enjoy a calm stay shaped by the rhythm of the land.",
    accommodationTitle: "Rest in Tradition, Wrapped in Comfort",
    accommodationText:
      "Rest in a traditional Mongolian ger with the space and comfort you need for a memorable stay with family, friends, or as a couple.",
    logoMark: "◉",
    logoSrc: "/images/alungoo/logo.png",
    hero: asset("alungoo", "15.jpg"),
    introImage: asset("alungoo", "30.JPG"),
    gallery: assets("alungoo", [
      "1.JPG",

      "3.JPG",
      "10.JPG",
      "11.JPG",
      "12.JPG",
      "13.JPG",
      "18.JPG",
      "22.JPG",
      "23.JPG",
      "25.JPG",
      "26.JPG",
      "27.JPG",
    ]),
    accommodation: [
      {
        title: "Classic Ger",
        guests: "2 Guests",
        image: asset("alungoo", "a1.JPG"),
      },
      {
        title: "Deluxe Ger",
        guests: "2–3 Guests",
        image: asset("alungoo", "a2.JPG"),
      },
      {
        title: "Family Ger",
        guests: "4–5 Guests",
        image: asset("alungoo", "a3.JPG"),
      },
      ...["a4.JPG", "a5.JPG", "a6.JPG", "a7.JPG", "a8.JPG"].map(
        (file, index) => ({
          title: `Accommodation ${index + 4}`,
          guests: "2–5 Guests",
          image: asset("alungoo", file),
        }),
      ),
    ],
    restaurant: {
      title: "A Taste of Mongolia",
      text: "Traditional dishes, seasonal ingredients and a calm fireside atmosphere create an intimate dining experience.",
      image: asset("alungoo", "r1.JPG"),
      detailImages: [
        asset("alungoo", "r2.JPG"),
        asset("alungoo", "r3.JPG"),
        asset("alungoo", "r4.JPG"),
      ],
    },
    contact: {
      phone: "+976 9909 8720",
      email: "info@hoyorzagal.mn",
      location: "Gorkhi-Terelj National Park",
    },
    features: [
      { label: "Authentic Gers", icon: "ger" },
      { label: "Open Sky", icon: "sun" },
      { label: "Local Cuisine", icon: "food" },
      { label: "Quiet Nature", icon: "leaf" },
      { label: "Warm Service", icon: "bed" },
      { label: "Wide Views", icon: "mountain" },
    ],
    theme: { accent: "#d7ad73", dark: "#302015", light: "#f4ede2" },
  },
  {
    slug: "guru-eco-complex",
    name: "GURU",
    subtitle: "ECO COMPLEX",
    description:
      "An immersive nature retreat where modern comfort meets granite mountains, forests and the wide Mongolian sky.",
    heroTagline: "Nature-led comfort in the forest",
    experienceTitle: "A Retreat Rooted in the Wild",
    experienceText:
      "Enjoy a slow, restorative stay surrounded by forest, water and open skies, with comfort that blends into nature.",
    accommodationTitle: "Rest well, wake up close to nature.",
    accommodationText:
      "Enjoy generous private accommodation designed for groups who want comfort, space, and easy access to the surrounding landscape.",
    logoMark: "◌",
    logoSrc: "/images/guru/logo.png",
    hero: asset("guru", "13.jpg"),
    introImage: asset("guru", "g9.JPG"),
    gallery: assets("guru", [
      "hero.png",
      "1.JPG",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.JPG",
      "g1.JPG",
      "g2.JPG",
      "g3.JPG",
      "g4.JPG",
      "g5.JPG",
      "g6.JPG",
      "g7.JPG",
      "g8.JPG",
      "g9.JPG",
      "g10.JPG",
      "g11.JPG",
      "g12.JPG",
    ]),
    accommodation: [
      {
        title: "Forest Cabin",
        guests: "2 Guests",
        image: asset("guru", "a1.JPG"),
      },
      {
        title: "Lake Cabin",
        guests: "2–3 Guests",
        image: asset("guru", "a2.JPG"),
      },
      {
        title: "Family Villa",
        guests: "4 Guests",
        image: asset("guru", "a3.JPG"),
      },
      ...[
        "a4.JPG",
        "a5.JPG",
        "a6.JPG",
        "a7.JPG",
        "a8.JPG",
        "a9.JPG",
        "a10.JPG",
      ].map((file, index) => ({
        title: `Accommodation ${index + 4}`,
        guests: "2–4 Guests",
        image: asset("guru", file),
      })),
    ],
    restaurant: {
      title: "Garden to Table",
      text: "Fresh, simple dishes inspired by the surrounding forest and seasonal produce, served beside the water.",
      image: asset("guru", "r1.JPG"),
      detailImages: [
        asset("guru", "r2.JPG"),
        asset("guru", "r3.JPG"),
        asset("guru", "r4.JPG"),
      ],
    },
    contact: {
      phone: "+976 9909 6714",
      email: "info@hoyorzagal.mn",
      location: "Gorkhi-Terelj National Park",
    },
    features: [
      { label: "Eco Resort", icon: "leaf" },
      { label: "Forest Views", icon: "mountain" },
      { label: "Wellness", icon: "sun" },
      { label: "Quiet Cabins", icon: "bed" },
      { label: "Local Food", icon: "food" },
      { label: "Nature First", icon: "ger" },
    ],
    theme: { accent: "#caa86e", dark: "#172119", light: "#f1eee5" },
  },
];

export const getResort = (slug: string) =>
  resorts.find((resort) => resort.slug === slug) ?? resorts[0];
