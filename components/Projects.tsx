import Doggie from "@/public/doggie.png";
import Image from "next/image";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [];

const Projects = () => {
  return (
    <section className="min-h-screen overflow-auto px-4 sm:px-16 xl:px-28 2xl:px-52 py-8 flex flex-col">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-4xl text-green-700 font-extrabold font-poppins leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Projects
        </h1>
        {projects.length > 0 && (
          <p className="text-lg leading-7">List of projects I've worked on.</p>
        )}
      </div>
      <div className="py-8 flex self-center">
        {projects.length > 0 ? (
          <div className="flex flex-col space-y-4 md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-16">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <div className="self-center text-center flex flex-col">
            <Image
              src={Doggie}
              alt="No projects at the moment"
              className="self-center w-[600px]"
            />
            <p className="text-center font-poppins font-medium text-[20px] md:text-[26px]">
              Check back soon. There should be something for you 😜.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
