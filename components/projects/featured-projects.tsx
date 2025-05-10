import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./project-card";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I've worked on that showcase my
              skills and expertise.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 py-12 lg:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
