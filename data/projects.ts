import chat from "@/public/projects/chat.jpg";
// import library from "@/public/projects/library.jpg";
import { Project } from "@/utils/types";

export const projects: Project[] = [
  {
    title: "ReviewSkill",
    description:
      "An application that allows spaced reviewing of learnt material.",
    imgSrc: chat,
    deploymentHref: "https://review-skill.vercel.app/",
    sourceCodeHref: "https://github.com/apella1/review_skill_django",
    techStack: [
      "Django REST",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Postgres",
      "Heroku",
    ],
  },
  // {
  //   title: "Library Site",
  //   description:
  //     "A library site that allows users to view, create, update, and delete books and authors.",
  //   imgSrc: library,
  //   sourceCodeHref: "https://github.com/apella1/local_library",
  //   techStack: [
  //     "JavaScript",
  //     "Express",
  //     "Node.js",
  //     "MongoDB",
  //     "Tailwind CSS",
  //     "Pug",
  //   ],
  // },
];
