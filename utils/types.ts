import { StaticImageData } from "next/image";

export type MenuItem = {
  name: string;
  href: string;
};

export type SocialIcon = {
  name: string;
  href: string;
  icon: React.JSX.Element;
};

export type FavoriteTechnology = {
  imgSrc: string;
  imgAlt: string;
  href: string;
};

export type Project = {
  title: string;
  imgSrc?: StaticImageData;
  deploymentHref?: string;
  sourceCodeHref?: string;
  description: string;
};
