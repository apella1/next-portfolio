import chat from "@/public/projects/chat.jpg";
import { Project } from "@/utils/types";

export const projects: Project[] = [
  {
    title: "ReviewSkill",
    description:
      "An application that allows spaced reviewing of learnt material.",
    imgSrc: chat,
    deploymentHref: "https://review-skill.vercel.app/",
    sourceCodeHref: "https://github.com/apella1/review-skill-frontend",
    techStack: [
      "Go-Chi",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Postgres",
      "Heroku",
    ],
  },
];
