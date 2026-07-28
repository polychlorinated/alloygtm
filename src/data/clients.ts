export interface Client {
  name: string;
  url: string;
  logo: string;
}

export const clients: Client[] = [
  { name: "Quiltt", url: "https://www.quiltt.io/", logo: "/logos/quiltt.svg" },
  { name: "SS&C Blue Prism", url: "https://www.blueprism.com/", logo: "/logos/ssc-blueprism.png" },
  { name: "Breakroom", url: "https://breakroomapp.com", logo: "/logos/breakroom.png" },
  { name: "Catalyst Education", url: "https://catalystedu.com", logo: "/logos/catalyst-edu.png" },
  { name: "GLYNT", url: "https://glynt.ai/", logo: "/logos/glynt.webp" },
  { name: "Sinfonia", url: "https://sinfonia.site/", logo: "/logos/sinfonia.svg" },
  { name: "Ebit", url: "https://ebitcommunity.com/pro", logo: "/logos/ebit.avif" },
];
