import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="">
      <h2 className="text-3xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <p>{post.description}</p>
      <div className="flex space-x-2 text-md text-blue-400 uppercase">
        {post.tags?.map((tag, index) => <div key={index}>{tag}</div>)}
      </div>
      <time dateTime={post.publishedAt} className="block text-xs text-gray-600">
        {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
      </time>
    </div>
  );
};

export default PostCard;
