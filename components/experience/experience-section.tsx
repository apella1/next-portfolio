import type { Experience } from "@/data/experience";
import ExperienceCard from "./experience-card";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="w-full py-12">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Work Experience
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and the companies I've had the pleasure to
              work with.
            </p>
          </div>
        </div>
        <div className="space-y-8 py-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
