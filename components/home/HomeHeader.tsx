import profilePic from "@/public/profile.webp";
import { SocialIcon } from "@/utils/types";
import Image from "next/image";
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
    <header className="flex flex-col px-4 pt-8 pb-28 space-y-6 lg:space-y-8 sm:px-16 xl:px-28 2xl:px-72">
      <section className="px-4">
        <div className="rounded-full border-[4px] border-blue-400 w-fit">
          <Image src={profilePic} alt="" className="rounded-full w-44" />
        </div>
      </section>
      <div className="px-4 flex flex-col space-y-2 font-poppins">
        <p className="text-[20px] leading-[36px] font-medium">
          Hi, I'm John, a software engineer specializing in API design and
          development.
        </p>
        <p className="text-[20px] leading-[36px]">
          Welcome to my site where I share and write about the products I build
          and the tools I work with daily.
        </p>
      </div>
      <div className="flex items-center space-x-3 px-4">
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
    </header>
  );
};

export default HomeHeader;
