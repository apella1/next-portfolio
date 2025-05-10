import ExperienceSection from "@/components/experience/experience-section";
import HomeHeader from "@/components/home/home-header";
import RecentPosts from "@/components/home/recent-posts";
import FeaturedProjects from "@/components/projects/featured-projects";

export default function Home() {
  return (
    <main className="">
      <HomeHeader />
      <ExperienceSection />
      <RecentPosts />
      <FeaturedProjects />
    </main>
  );
}
