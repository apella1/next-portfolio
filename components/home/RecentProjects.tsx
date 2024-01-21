import { allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import ProjectPostCard from "../projects/ProjectPostCard";

const RecentProjects = () => {
  const projects = allProjects
    .filter((post) => post.isPublished)
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
    )
    .slice(0, 3);
  return (
    <>
      {projects.length > 0 && (
        <section className="flex flex-col px-4 pt-16 space-y-4 sm:px-16 xl:px-28 2xl:px-72">
          <h1 className="text-3xl font-bold">Recent Projects</h1>
          <div className="">
            {projects.map((project, index) => (
              <ProjectPostCard key={index} project={project} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default RecentProjects;
