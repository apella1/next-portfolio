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
            Hi, I'm John Apella, a Cloud Security Engineer (Google Cloud
            Platform) in transition from Backend Software Development and DevOps
            Engineering. My background is in designing, building, and operating
            backend systems using Kotlin, Spring Boot, Docker, Kubernetes, and
            Google Cloud Platform. Working across software development and
            infrastructure has given me a strong understanding of how modern
            applications are built, deployed, and maintained in production
            environments.
          </p>
          <p className="text-lg text-start">
            Today, my primary focus is cloud security. I'm developing expertise
            in cloud architecture, networking, identity and access management,
            Kubernetes security, observability, and infrastructure hardening.
            I'm particularly interested in how security can be integrated into
            engineering workflows to create systems that are secure, reliable,
            and scalable by design. This website documents my projects,
            experiments, and lessons learned as I continue building practical
            experience at the intersection of cloud infrastructure, security,
            and software engineering.
          </p>
          <p className="text-lg text-start">I'm based in Nairobi, Kenya.</p>
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
