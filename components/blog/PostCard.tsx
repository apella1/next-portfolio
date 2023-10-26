import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="flex flex-col space-y-3">
      <h2 className="text-[20px] text-blue-400">
        <Link
          href={post.url}
          className=""
        >
          {post.title}
        </Link>
      </h2>
      <p>{post.description}</p>
      <time dateTime={post.publishedAt} className="block text-xs text-gray-600">
        {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
      </time>
    </div>
  );
};

export default PostCard;
