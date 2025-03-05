import ExperienceSection from "@/components/experience/experience-section";
import HomeHeader from "@/components/home/home-header";
import RecentPosts from "@/components/home/recent-posts";
import FeaturedProjects from "@/components/projects/featured-projects";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="">
      <HomeHeader />
      <ExperienceSection experiences={experiences} />
      <RecentPosts />
      <FeaturedProjects projects={projects} />
    </main>
  );
}
