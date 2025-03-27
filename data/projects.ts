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
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, featuring product listings, cart functionality, user authentication, and payment processing.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "PostgreSQL",
    ],
    githubUrl: "#",
    demoUrl: "#",
    featured: true,
  },
  {
    title: "Dashboard Application",
    description:
      "An analytics dashboard with real-time data visualization, user management, and reporting features. Built for a SaaS company to monitor customer metrics.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "WebSockets"],
    githubUrl: "#",
    demoUrl: "#",
    featured: true,
  },
  {
    title: "Mobile Fitness App",
    description:
      "A cross-platform fitness application that allows users to track workouts, set goals, and connect with trainers. Features include progress tracking and social sharing.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["React Native", "Firebase", "Redux", "GraphQL", "Expo"],
    githubUrl: "#",
    demoUrl: "#",
    featured: true,
  },
  {
    title: "Content Management System",
    description:
      "A custom CMS built for a media company to manage articles, multimedia content, and user-generated content. Includes an intuitive admin interface and API.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["Vue.js", "Express", "PostgreSQL", "AWS S3", "JWT"],
    githubUrl: "#",
    demoUrl: "#",
    featured: false,
  },
];

export const getAllTechnologies = (): string[] => {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};
