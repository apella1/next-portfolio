export type Post = {
  title: string;
  slug: string;
  publishedAt: string; // Format: 'YYYY-MM-DD'
  description: string;
  image?: string;
  isPublished: boolean;
  author: string;
  tags?: string[];
  content: string;
};
