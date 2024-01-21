import { format, parseISO } from "date-fns";
import { allProjects } from "contentlayer/generated";
import Image from "next/image";

export const generateStaticParams = async () =>
  allProjects.map((project) => ({
    slug: project._raw.flattenedPath.replace(/projects\/?/, ""),
  }));

export default function Project({ params }: { params: { slug: string } }) {
  const post = allProjects.find(
    (project) =>
      project._raw.flattenedPath.replace(/projects\/?/, "") === params.slug,
  );
  if (!post) {
    throw new Error(`Post not found for slug: ${params.slug}`);
  }

  return (
    <section className="px-4 space-y-4 sm:px-16 xl:px-28 2xl:px-72 pt-8">
      <article>
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <Image
            src={post.imgSrc}
            alt=""
            width={400}
            height={400}
            className=""
          />
          <time
            dateTime={post.publishedAt}
            className="mb-1 text-xs text-gray-600"
          >
            {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
          </time>
        </div>
        <div
          className="[&>*]:mb-3 [&>*:last-child]:mb-0"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </section>
  );
}
