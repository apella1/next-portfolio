import { Project } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { DiChrome, DiGithubBadge } from "react-icons/di";

const ProjectPost = ({ project }: { project: Project }) => {
  const { title, imgSrc, url, description, sourceCodeHref, techStack } =
    project;
  return (
    <section
      className={`${
        imgSrc && "h-full"
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (url ? (
          <Link href={url} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              width={544}
              height={400}
              className="object-cover object-center md:h-36 lg:h-48"
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            width={544}
            height={400}
            className="object-cover object-center md:h-36 lg:h-48"
          />
        ))}
      <div className="p-4 flex flex-col space-y-4">
        <h2 className="text-[20px] leading-[32px] font-semibold">
          {url ? (
            <Link href={url} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="text-[16px] leading-[22px]">{description}</p>
        <div className="flex flex-wrap items-center gap-2">
          {techStack.map((stack, index) => (
            <p
              className="text-[14px] leading-[18px] font-medium opacity-50"
              key={index}
            >
              {stack.toUpperCase()}
            </p>
          ))}
        </div>
        <div className="flex items-center space-x-4 pb-4">
          {url && (
            <Link
              href={url}
              aria-label={`Link to ${title}`}
              className="text-[30px] font-medium leading-[20px] text-blue-400 hover:animate-pulse"
            >
              <DiChrome />
            </Link>
          )}
          {sourceCodeHref && (
            <Link
              href={sourceCodeHref}
              aria-label={`Link to ${title} source code`}
              target="_blank"
              className="text-[30px] font-medium leading-[20px] text-blue-400 hover:animate-pulse"
            >
              <DiGithubBadge />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectPost;
