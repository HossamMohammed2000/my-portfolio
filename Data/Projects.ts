export type Project = {
  title: string;
  description: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Weather App",
    description: "Weather application using public API.",
    tech: ["React", "API", "CSS"],
  },
  {
    title: "Portfolio",
    description: "Personal portfolio built with Next.js.",
    tech: ["Next.js", "TypeScript"],
  },
];
