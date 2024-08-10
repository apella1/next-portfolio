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
    endDate.trim().toLowerCase() === "present" ? new Date() : new Date(endDate);

  if (end < start) return "0 months";

  const diffInMs = end.getTime() - start.getTime();

  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  let duration = "";
  if (years > 0) {
    duration += `${years} year${years > 1 ? "s" : ""} `;
  }
  if (months > 0) {
    duration += `${months} month${months > 1 ? "s" : ""} `;
  }
  if (days > 0 || duration === "") {
    duration += `${days} day${days > 1 ? "s" : ""}`;
  }

  return duration.trim();
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
            <span className="font-medium">From: </span>
            {startDate}
          </p>
          <p className="">
            <span className="font-medium">To: </span>
            {endDate.charAt(0).toUpperCase() + endDate.slice(1)}
          </p>
        </div>
        <p className="">Duration: {duration}</p>
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
