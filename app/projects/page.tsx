"use client";

import { useState } from "react";
import { projects, getAllTechnologies } from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const allTechnologies = getAllTechnologies();

  const filteredProjects = projects.filter(
    (project) =>
      selectedTech.length === 0 ||
      selectedTech.some((tech) => project.technologies.includes(tech))
  );

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  return (
    <section className="w-full py-12 bg-muted/50">
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
          </div>

          <div className="w-full max-w-4xl">
            <div className="flex flex-wrap gap-2 justify-center py-4">
              {selectedTech.length > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedTech([])}
                  className="mr-2"
                >
                  Clear Filters <X className="ml-2 h-4 w-4" />
                </Button>
              )}
              {allTechnologies.map((tech) => (
                <Badge
                  key={tech}
                  variant={selectedTech.includes(tech) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleTech(tech)}
                >
                  {tech}
                </Badge>
              ))}
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
