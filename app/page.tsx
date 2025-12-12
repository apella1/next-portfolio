import RecentPosts from "@/components/home/recent-posts";
import { getPosts } from "@/utils/posts";
import { getLabs } from "@/utils/labs";

export default async function Home() {
  const [allPosts, allLabs] = await Promise.all([getPosts(), getLabs()]);

  return (
    <main className="min-h-screen">
      <RecentPosts posts={allPosts} />
    </main>
  );
}
