"use client";

import ProjectCard from "@/components/projects/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllTechnologies, projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const allTechnologies = getAllTechnologies();

  const filteredProjects = projects.filter((project) => {
    if (selectedTech.length === 0) return true;
    return project.technologies.some((tech) => selectedTech.includes(tech));
  });

  const toggleTech = (tech: string) => {
    setSelectedTech((prevSelectedTech) => {
      if (prevSelectedTech.includes(tech)) {
        const newSelectedTech = prevSelectedTech.filter((t) => t !== tech);
        return newSelectedTech;
      }

      const newSelectedTech = [...prevSelectedTech, tech];
      return newSelectedTech;
    });
  };

  return (
    <section className="w-full py-12 min-h-screen">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              All Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A comprehensive collection of my work, showcasing various
              technologies and solutions.
            </p>
            <p>Click on the badges below to filter projects by technology.</p>
          </div>

          <div className="w-full max-w-4xl">
            <div className="flex flex-wrap gap-2 justify-center py-4">
              {allTechnologies.map((tech) => (
                <Badge
                  key={tech}
                  variant={selectedTech.includes(tech) ? "default" : "outline"}
                  className={cn(
                    `cursor-pointer transition-colors`,
                    selectedTech.includes(tech)
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "hover:bg-muted"
                  )}
                  onClick={() => toggleTech(tech)}
                >
                  {tech}
                </Badge>
              ))}
              {selectedTech.length > 0 && (
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => setSelectedTech([])}
                  className="mr-2"
                >
                  Clear Filters <X className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="mx-auto grid gap-8 py-12 lg:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-muted-foreground py-12">
            No projects found matching the selected filters.
          </div>
        )}
      </div>
    </section>
  );
}
