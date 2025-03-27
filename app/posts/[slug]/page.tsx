import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({
    slug: post._raw.flattenedPath.replace(/posts\/?/, ""),
  }));

export default async function Post(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = allPosts.find(
    (post) => post._raw.flattenedPath.replace(/posts\/?/, "") === params.slug,
  );
  if (!post) {
    throw new Error(`Post not found for slug: ${params.slug}`);
  }

  return (
    <section className="px-4 space-y-4 sm:px-16 xl:px-28 2xl:px-72 pt-8">
      <article>
        <div className="mb-8">
          {/* <Image
            src={post.image}
            alt=""
            width={400}
            height={400}
            className=""
          /> */}
          <h1 className="text-[30px] font-bold self-start">{post.title}</h1>
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
