import RecentPosts from "@/components/home/recent-posts";
import { getPosts } from "@/utils/posts";
import HomeHeader from "@/components/home/home-header";
import { getNotes } from "@/utils/notes";

export default async function Home() {
  const posts = await getPosts();
  const notes = await getNotes();

  return (
    <main className="min-h-[80vh]">
      <HomeHeader />
      <RecentPosts posts={posts} notes={notes} />
    </main>
  );
}
