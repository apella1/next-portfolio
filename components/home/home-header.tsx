import profilePic from "@/public/profile.webp";
import { SocialIcon } from "@/utils/types";
import Image from "next/image";
import { DiGithubBadge } from "react-icons/di";
import { FaTwitter } from "react-icons/fa";
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
    icon: <FaTwitter />,
  },
];

const HomeHeader = () => {
  return (
    <header className="flex flex-col px-4 py-12 md:py-24 lg:py-32 sm:px-16 xl:px-28 2xl:px-72">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <section className="px-4">
            <div className="w-fit rounded-full">
              <Image src={profilePic} alt="" className="w-44 rounded-full" />
            </div>
          </section>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Hi, I'm John Apella
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A software engineer building things using TypeScript. Welcome to
              my site where I share what I'm learning in my growth as a software
              engineer.
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
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
