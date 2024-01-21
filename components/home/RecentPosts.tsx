import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { PostCard } from "../blog";

const RecentPosts = () => {
  const posts = allPosts
    .filter((post) => post.isPublished)
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
    )
    .slice(0, 3);
  return (
    <>
      {posts.length > 0 && (
        <section className="flex flex-col px-4 pt-16 space-y-4 sm:px-16 xl:px-28 2xl:px-72">
          <h1 className="text-3xl font-bold">Recent Posts</h1>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </section>
      )}
    </>
  );
};

export default RecentPosts;
