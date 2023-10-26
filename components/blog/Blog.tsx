import Book from "@/public/blog.png";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import PostCard from "./PostCard";

const Blog = () => {
  const posts = allPosts
    .filter((post) => post.isPublished)
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    );

  return (
    <section className="min-h-screen overflow-auto px-4 sm:px-16 xl:px-28 2xl:px-72 py-8 flex flex-col">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 flex flex-col">
        <h1 className="text-4xl self-center md:self-start text-green-700 font-bold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          All posts
        </h1>
        {posts.length > 0 ? (
          posts.map((post, index) => <PostCard key={index} post={post} />)
        ) : (
          <div className="self-center text-center flex flex-col">
            <Image
              src={Book}
              alt="No posts at the moment"
              className="self-center w-[600px]"
            />
            <p className="text-center font-poppins font-medium text-[18px] md:text-[26px] flex flex-col space-y-2">
              <span>
                Hang tight. I'm whipping up something for you to geek out.
              </span>
              <span className="italic">Coming your way real soon! 🚀</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
