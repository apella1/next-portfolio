import HomeHeader from "@/components/home/home-header";
import RecentPosts from "@/components/home/recent-posts";
import RecentLabs from "@/components/home/recent-labs";
import ValueProps from "@/components/home/value-props";
import HowLabsWorks from "@/components/home/how-labs-works";
import NewsletterTeaser from "@/components/home/newsletter-teaser";
import { getPosts } from "@/utils/posts";
import { getLabs } from "@/utils/labs";

export default async function Home() {
  const [allPosts, allLabs] = await Promise.all([getPosts(), getLabs()]);

  return (
    <main className="">
      <HomeHeader />
      <ValueProps />
      <HowLabsWorks />
      <NewsletterTeaser />
      <RecentPosts posts={allPosts} />
      <RecentLabs labs={allLabs} />
    </main>
  );
}
