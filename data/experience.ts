export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  isCurrent?: boolean;
}

export const experiences: Array<Experience> = [
  {
    company: "LCT Africa",
    companyUrl: "https://www.lctafrica.net/",
    title: "Frontend Software Engineer",
    period: "1st July, 2024 - Present",
    isCurrent: true,
    description:
      "Lead the frontend development team in building and maintaining a complex SaaS platform. Implemented modern frontend architecture using Next.js and TypeScript. Improved performance metrics by 40% and reduced build times.",
  },
  {
    company: "Africa Blockchain Center",
    companyUrl: "https://theafricablockchaincenter.com/",
    title: "Frontend Software Engineer",
    period: "11th April, 2023 - 31st May, 2024",
    description:
      "Developed responsive web applications for various clients across different industries. Worked with React, Redux, and CSS-in-JS solutions. Collaborated closely with designers and backend developers to deliver high-quality products.",
  },
];
