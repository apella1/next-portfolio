import { SocialIcon } from "@/utils/types";
import { DiGithubBadge } from "react-icons/di";
import { FiLinkedin } from "react-icons/fi";

const socialIcons: SocialIcon[] = [
  {
    name: "Github",
    href: "https://github.com/apella1",
    icon: <DiGithubBadge />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/johnapella",
    icon: <FiLinkedin />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/apella_john",
    icon: <DiGithubBadge />,
  },
];

const HomeHeader = () => {
  return (
    <header className="flex flex-col px-4 py-8 space-y-8 lg:space-y-8 sm:px-16 xl:px-28 2xl:px-72 lg:py-28">
      <div className="flex items-center space-x-3">
        {socialIcons.map((socialIcon, index) => (
          <a
            href={socialIcon.href}
            key={index}
            target="_blank"
            className="hover:bg-[#076115] hover:text-white py-2 px-3 rounded-2xl flex items-center space-x-2 border border-gray-300 p-4"
          >
            <div className="text-2xl">{socialIcon.icon}</div>
            <p>{socialIcon.name}</p>
          </a>
        ))}
      </div>
      <div className="flex flex-col space-y-3 xl:space-y-6">
        <h1 className="self-center mx-8 text-2xl font-extrabold text-center lg:mx-0 sm:text-3xl xl:text-5xl font-inter">
    hello
        </h1>
        <div className="flex flex-col self-center px-8 space-y-4 text-lg text-center font-poppins xl:text-xl"></div>
      </div>
    </header>
  );
};

export default HomeHeader;
