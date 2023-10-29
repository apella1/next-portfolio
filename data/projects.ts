import chat from "@/public/projects/chat.jpg";
import library from "@/public/projects/library.jpg";
import { Project } from "@/utils/types";

export const projects: Project[] = [
  {
    title: "EducateNow",
    description:
      "A chat application that allows students to connect with tutors and other students to ask questions and get help with their questions on any technical subjects.",
    imgSrc: chat,
    deploymentHref: "https://educatenow-ec2f9ec4e203.herokuapp.com/",
    sourceCodeHref: "https://github.com/apella1/educatenow-django",
    techStack: ["Django", "Python", "HTML", "CSS", "PostgreSQL", "Heroku"],
  },
  {
    title: "Library Site",
    description:
      "A library site that allows users to view, create, update, and delete books and authors.",
    imgSrc: library,
    sourceCodeHref: "https://github.com/apella1/local_library",
    techStack: [
      "JavaScript",
      "Express",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Pug",
    ],
  },
];
