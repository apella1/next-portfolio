export type Lab = {
  title: string;
  slug: string;
  publishedAt: string;
  description: string;
  image?: string;
  isPublished: boolean;
  author: string;
  tags?: string[];
  content: string;
};
