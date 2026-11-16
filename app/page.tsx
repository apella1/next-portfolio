import RecentPostsAndNotes from "@/components/home/recent-posts-and-notes";
import { getPosts } from "@/utils/posts";
import HomeHeader from "@/components/home/home-header";
import { getNotes } from "@/utils/notes";

export default async function Home() {
  const posts = await getPosts();
  const notes = await getNotes();

  return (
    <main className="min-h-[80vh]">
      <HomeHeader />
      <RecentPostsAndNotes posts={posts} notes={notes} />
    </main>
  );
}
