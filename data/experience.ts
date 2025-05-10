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
    title: "Fullstack Software Engineer",
    period: "1st July, 2024 - Present",
    isCurrent: true,
    description: "",
  },
  {
    company: "Africa Blockchain Center",
    companyUrl: "https://theafricablockchaincenter.com/",
    title: "Frontend Software Engineer",
    period: "11th April, 2023 - 31st May, 2024",
    description: "",
  },
];
