import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={project.image || "/placeholder.svg"}
        width={600}
        height={300}
        alt={project.title}
        className="aspect-video object-cover w-full"
      />
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <div className="flex gap-2">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            )}
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                className="text-muted-foreground hover:text-primary"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">Live Demo</span>
              </Link>
            )}
          </div>
        </div>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <Badge key={techIndex} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
