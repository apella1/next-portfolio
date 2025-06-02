import { Post } from "@/types/post";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PostCard = ({
  post,
  isAllBlogsPage,
}: {
  post: Post;
  isAllBlogsPage?: boolean;
}) => {
  const formattedDate = (() => {
    try {
      return format(parseISO(post.publishedAt), "LLLL d, yyyy");
    } catch (error) {
      console.error(`Error formatting date for post ${post.slug}:`, error);
      return post.publishedAt;
    }
  })();

  return (
    <>
      <Card className="hover:bg-muted/50 transition-colors">
        <CardHeader className="space-y-0 pb-2">
          <CardTitle>
            <Link
              href={`/posts/${post.slug}`}
              className="text-xl hover:text-primary transition-colors"
            >
              {post.title}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {!isAllBlogsPage && (
            <p className="text-muted-foreground">{post.description}</p>
          )}
          <time
            dateTime={post.publishedAt}
            className="text-sm text-muted-foreground"
          >
            Date Published: {formattedDate}
          </time>
        </CardContent>
      </Card>
    </>
  );
};

export default PostCard;
