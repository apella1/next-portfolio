export interface ExperienceProps {
  company: string;
  companyUrl: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

const ExperienceCard = ({ experience }: { experience: ExperienceProps }) => {
  const { company, companyUrl, role, startDate, endDate, achievements } =
    experience;

  return (
    <div className="rounded-lg shadow-md p-6 flex flex-col space-y-3">
      <a href={companyUrl} target="_blank" className="text-xl font-bold">
        {company}
      </a>
      <p className="">{role}</p>
      <div>
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <p className="">
            <span className="font-medium">From: </span>
            {startDate}
          </p>
          <p className="">
            <span className="font-medium">To: </span>
            {endDate.charAt(0).toUpperCase() + endDate.slice(1)}
          </p>
        </div>
      </div>
      {achievements.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Achievements:</h4>
          <ul className="list-disc ml-6">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
