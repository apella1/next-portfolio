import HomeHeader from "@/components/home/home-header";
import RecentPosts from "@/components/home/recent-posts";

import ValueProps from "@/components/home/value-props";
import HowLabsWorks from "@/components/home/how-labs-works";
import LabsTeaser from "@/components/home/labs-teaser";
import FAQ from "@/components/home/faq";

export default function Home() {
  return (
    <main className="">
      <HomeHeader />
      <ValueProps />
      <HowLabsWorks />
      <LabsTeaser />
      <RecentPosts />
      <FAQ />
    </main>
  );
}
