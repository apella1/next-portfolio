type Project = {
  title: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { title } = project;
  return (
    <section>
      <h2>{title}</h2>
    </section>
  );
};

export default ProjectCard;
