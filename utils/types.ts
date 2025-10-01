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

export type Certification = {
  id?: string;
  title: string;
  issuer: string;
  issuedDate?: string;
  description?: string;
  href?: string; // link to verification or cert details
  imageUrl?: string; // certification badge image URL
};
