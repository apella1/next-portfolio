import { allProjects } from "@/.contentlayer/generated";
import { projects } from "@/data/projects";
import Doggie from "@/public/doggie.png";
import { compareDesc } from "date-fns";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import ProjectPost from "./ProjectPost";

const Projects = () => {
  const projectPosts = allProjects
    .filter((project) => project.isPublished)
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    );

  return (
    <section className="min-h-screen overflow-auto px-4 sm:px-16 xl:px-28 2xl:px-72 py-8 flex flex-col">
      <div className="space-y-2 pt-6 pb-4 md:space-y-5">
        <h1 className="text-[30px] leading-[30px] text-blue-700 font-semibold font-poppins">
          Projects
        </h1>
        {projects.length > 0 && (
          <p className="text-lg leading-7">
            Some of the projects I'm working on.
          </p>
        )}
      </div>
      <div className="py-4 flex self-center">
        {projects.length > 0 ? (
          <div className="flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3">
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
      {projectPosts.length > 0 && (
        <section className="flex flex-col space-y-4 pt-8">
          <div className="flex flex-col space-y-2">
            <h1 className="text-[30px] leading-[30px] text-green-700 font-semibold font-poppins">
              Other Projects
            </h1>
            <p className="text-lg leading-7">
              Other projects that I've written about.
            </p>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3">
            {projectPosts.map((project, index) => (
              <ProjectPost key={index} project={project} />
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default Projects;
