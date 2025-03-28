import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { format, parseISO } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: PageProps) {
  const { slug } = await (async () => {
    "use server";
    return { slug: params.slug };
  })();

  if (!slug) {
    notFound();
  }

  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container max-w-3xl py-8 md:py-10">
      <article className="space-y-4">
        <Card className="border-none shadow-none bg-transparent">
          <CardHeader className="space-y-4 px-0">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {post.description}
              </p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <time dateTime={post.publishedAt}>
                {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
              </time>
              {post.author && (
                <>
                  <Separator orientation="vertical" className="h-4" />
                  <div>By {post.author}</div>
                </>
              )}
            </div>
          </CardHeader>
          <CardContent className="px-0">
            <Separator className="my-4" />
            <div className="prose dark:prose-invert max-w-none">
              <MDXRemote source={post.content} />
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}
