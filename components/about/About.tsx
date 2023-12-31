import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

const About = () => {
  return (
    <section className="min-h-screen overflow-auto px-4 sm:px-16 xl:px-28 2xl:px-72 py-8 flex flex-col space-y-6">
      <section className="flex flex-col space-y-4">
        <h2 className="text-2xl text-blue-700 font-semibold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          Experience
        </h2>
        <div className="flex flex-col space-y-4">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default About;
