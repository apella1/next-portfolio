import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export default function Post({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) {
    throw new Error(`Post not found for slug: ${params.slug}`);
  }

  return (
    <section className="px-4 space-y-4 sm:px-16 xl:px-28 2xl:px-72 pt-8">
      <article>
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <Image
            src={post.image}
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
