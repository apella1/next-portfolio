import Image from "next/image";
import Book from "@/public/blog.png";

const blogs: string[] = [];

const Blog = () => {
  return (
    <section className="h-screen overflow-auto px-4 sm:px-16 lg:px-28 2xl:px-52 py-8 flex flex-col">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl text-green-700 font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Blog
        </h1>
        {blogs.length > 0 && (
          <p className="text-lg leading-7">List of articles I've written</p>
        )}
      </div>
      <div className="self-center text-center flex flex-col">
        <Image
          src={Book}
          alt="No projects at the moment"
          className="self-center w-[600px]"
        />
        <p className="text-center font-poppins font-medium text-[26px] flex flex-col space-y-2">
          <span>
            Hang tight. I'm whipping up something for you to geek out.
          </span>
          <span>Coming your way real soon! 🚀</span>
        </p>
      </div>
    </section>
  );
};

export default Blog;
