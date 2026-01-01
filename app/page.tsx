import RecentPosts from "@/components/home/recent-posts";
import { getPosts } from "@/utils/posts";
import HomeHeader from "@/components/home/home-header";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="min-h-[80vh]">
      <HomeHeader />
      <RecentPosts posts={posts} />
    </main>
  );
}
