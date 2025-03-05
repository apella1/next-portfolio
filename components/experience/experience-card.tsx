import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/data/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 border-l border-muted-foreground/20">
      <div
        className={`absolute left-0 top-0 flex items-center justify-center w-6 h-6 ${
          experience.isCurrent ? "bg-primary" : "bg-muted-foreground/20"
        } rounded-full -translate-x-1/2`}
      >
        <div
          className={`w-2 h-2 ${
            experience.isCurrent ? "bg-background" : "bg-muted-foreground"
          } rounded-full`}
        ></div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold">{experience.title}</h3>
          {experience.isCurrent && <Badge>Current</Badge>}
        </div>
        <p className="text-muted-foreground">
          {experience.company} | {experience.period}
        </p>
        <p>{experience.description}</p>
      </div>
    </div>
  );
}
