import profilePic from "@/public/profile.webp";
import { SocialIcon } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { DiGithubBadge } from "react-icons/di";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { Button } from "../ui/button";

const socialIcons: SocialIcon[] = [
  {
    name: "Github",
    href: "https://github.com/apella1",
    icon: <DiGithubBadge className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/johnapella",
    icon: <FiLinkedin className="h-5 w-5" />,
  },
  {
    name: "",
    href: "https://x.com/apella_john",
    icon: <FaXTwitter className="h-5 w-5" />,
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
              I am a software engineer at LCT Africa. I work mostly with Next.js
              and React for the UI and Spring Boot for the backend utilizing
              Java and Kotlin.
            </p>
          </div>
          <div className="flex items-center gap-4 md:px-4">
            {socialIcons.map((socialIcon, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="space-x-2"
                asChild
              >
                <Link
                  href={socialIcon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialIcon.icon}
                  <span>{socialIcon.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
