import profilePic from "@/public/profile.webp";
import { SocialIcon } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import WakatimeWidget from "@/components/about/wakatime";
import Certifications from "@/components/about/certifications";
import { certifications } from "@/data/certifications";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About John Apella",
};

const socialIcons: SocialIcon[] = [
  {
    name: "Github",
    href: "https://github.com/apella1",
    icon: <FiGithub className="h-5 w-5" />,
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

const AboutPage = () => {
  return (
    <div className="py-12 min-h-screen">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <section className="px-4">
          <div className="w-fit rounded-full">
            <Image src={profilePic} alt="" className="w-44 rounded-full" />
          </div>
        </section>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tighter sm:text-3xl">
            About
          </h2>
          <p className="text-lg text-start">
            Hi. I'm John Apella, a software engineer from Nairobi, Kenya. I
            mainly work with technologies around the JVM ecosystem with a focus
            on Spring Boot using Kotlin as my preferred language. I also
            occasionally use Java. I work with cloud technologies with a focus
            on Google Cloud Platform, exploring the depths of networking and
            cloud security.
          </p>
          <p className="text-lg text-start">
            When I'm not programming, you can find me in a track running or
            playing basketball. If you have any questions based on what I talk
            about here or just want to talk, you can reach out on X or LinkedIn,
            info below.
          </p>
        </div>

        <div className="flex flex-col space-y-1.5 md:space-y-0 md:flex-row md:items-center md:gap-4 md:px-4 mt-8">
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

        <div className="w-full text-left pt-6">
          <Certifications certifications={certifications} />
        </div>

        <div className="w-full text-left pt-6" id="garden-telemetry">
          <h3 className="text-xl font-semibold mb-2">
            Coding Stats - Powered by Wakatime
          </h3>
          <WakatimeWidget />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
