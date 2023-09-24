export interface ExperienceProps {
  company: string;
  companyUrl: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

const calculateDuration = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end =
    endDate === "present" || "Present" ? new Date() : new Date(endDate);
  const diffInMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  if (years === 0) {
    return `${months} month${months === 1 ? "" : "s"}`;
  } else if (months === 0) {
    return `${years} year${years === 1 ? "" : "s"}`;
  } else {
    return `${years} year${years === 1 ? "" : "s"} ${months} month${
      months === 1 ? "" : "s"
    }`;
  }
};

const ExperienceCard = ({ experience }: { experience: ExperienceProps }) => {
  const { company, companyUrl, role, startDate, endDate, achievements } =
    experience;
  const duration = calculateDuration(startDate, endDate);

  return (
    <div className="rounded-lg shadow-md p-6 flex flex-col space-y-3">
      <a href={companyUrl} target="_blank" className="text-xl font-bold">
        {company}
      </a>
      <p className="">{role}</p>
      <div>
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <p className="">
            <span className="italic font-medium">From: </span>
            {startDate}
          </p>
          <p className="">
            <span className="italic font-medium">To: </span>
            {endDate}
          </p>
        </div>
        <p className="">Duration: {duration}</p>
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold">Achievements:</h4>
        <ul className="list-disc ml-6">
          {achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
