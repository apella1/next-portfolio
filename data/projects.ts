export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Zima",
    description:
      "Zima is a mental health platform that provides users with access to mental health resources and support from community contributors and professionals.",
    image: "/projects/zima.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Redux Toolkit",
    ],
    githubUrl: "https://github.com/apella1/zima-ui",
    demoUrl: "https://zima-ui.vercel.app/",
    featured: true,
  },
  {
    title: "Inventory Management",
    description:
      "This is an inventory management application that allows users to manage their inventory, track stock levels and monitor sales.",
    image: "/projects/inv-dashboard.png",
    technologies: [
      "Kotlin",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Google Cloud Platform",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    demoUrl: "https://inv-mn.vercel.app/",
    featured: true,
  },
];

export const getAllTechnologies = (): string[] => {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};
