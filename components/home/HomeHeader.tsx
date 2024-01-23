import profilePic from "@/public/profile.webp";
import { SocialIcon } from "@/utils/types";
import Image from "next/image";
import { DiGithubBadge } from "react-icons/di";
import { FiLinkedin } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";

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
    icon: <FaTwitter />,
  },
];

const HomeHeader = () => {
  return (
    <header className="flex flex-col px-4 py-8 space-y-6 lg:space-y-8 sm:px-16 xl:px-28 2xl:px-72">
      <section className="px-4">
        <div className="rounded-full border-[4px] border-blue-900 w-fit">
          <Image src={profilePic} alt="" className="rounded-full w-44" />
        </div>
      </section>
      <div className="px-4 flex flex-col space-y-1 font-poppins">
        <p className="text-[20px] leading-[36px] font-medium">
          Hi, I'm John, a software engineer building things mostly using Go,
          TypeScript and Python.
        </p>
        <p className="text-[20px] leading-[36px] font-medium">
          Welcome to my site where I share what I'm learning in my growth as a
          software engineer.
        </p>
      </div>
      <div className="flex items-center space-x-3 md:px-4">
        {socialIcons.map((socialIcon, index) => (
          <a
            href={socialIcon.href}
            key={index}
            target="_blank"
            className="hover:bg-blue-900 hover:text-white py-2 px-3 rounded-2xl flex items-center space-x-2 border border-gray-300 p-4"
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
