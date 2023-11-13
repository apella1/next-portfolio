import { Project } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

const ProjectPostCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col space-y-3">
      <h2 className="text-[20px] text-blue-400">
        <Link href={project.url} className="">
          {project.title}
        </Link>
      </h2>
      <p>{project.description}</p>
      <time
        dateTime={project.publishedAt}
        className="block text-xs text-gray-600"
      >
        {format(parseISO(project.publishedAt), "LLLL d, yyyy")}
      </time>
    </div>
  );
};

export default ProjectPostCard;
