import profilePic from "@/public/profile.webp";
import { format, parseISO } from "date-fns";
import Image from "next/image";

type ArticleHeaderProps = {
  title: string;
  subtitle: string;
  author: string;
  publishedAt: string;
};

export function ArticleHeader({
  title,
  subtitle,
  author,
  publishedAt,
}: ArticleHeaderProps) {
  return (
    <header className="not-prose mb-12">
      <h1 className="m-0 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
        {title}
      </h1>
      <p className="mb-0 mt-5 text-lg leading-relaxed text-muted-foreground lg:text-xl">
        {subtitle}
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Image
          src={profilePic}
          alt={author}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="space-y-1">
          <p className="m-0 text-base font-medium tracking-wide text-foreground">
            {author}
          </p>
          <time
            dateTime={publishedAt}
            className="block text-sm tracking-wide text-muted-foreground"
          >
            {format(parseISO(publishedAt), "MMM dd, yyyy")}
          </time>
        </div>
      </div>
    </header>
  );
}
