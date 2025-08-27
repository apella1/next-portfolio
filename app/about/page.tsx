import profilePic from "@/public/profile.webp";
import { SocialIcon } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import { DiGithubBadge } from "react-icons/di";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { Button } from "@/components/ui/button";

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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WakatimeWidget from "@/components/about/wakatime";

const AboutPage = () => {
  return (
    <div className="container py-12 min-h-screen">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <section className="px-4">
          <div className="w-fit rounded-full">
            <Image src={profilePic} alt="" className="w-44 rounded-full" />
          </div>
        </section>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Welcome to my garden 🌿
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl">
            I cultivate useful engineering things here. If you want the serious
            CV stuff, it’s on LinkedIn. If you’re curious who I am and what I’m
            growing, stay a while.
          </p>
        </div>

        <div className="w-full max-w-4xl text-left">
          <Tabs defaultValue="seeds" className="w-full">
            <TabsList>
              <TabsTrigger value="seeds">Seeds (ideas)</TabsTrigger>
              <TabsTrigger value="sprouts">Sprouts (in-progress)</TabsTrigger>
              <TabsTrigger value="bloom">Bloom (shipped)</TabsTrigger>
            </TabsList>
            <TabsContent value="seeds">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "DX tooling notes",
                  "Tiny k8s recipes",
                  "Ops runbooks",
                  "Testing strategies",
                ].map((item, idx) => (
                  <Card key={idx}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{item}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Drafts I’m refining into focused labs.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="sprouts">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Container security quickstart",
                  "Observability on rails",
                ].map((item, idx) => (
                  <Card key={idx}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{item}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Currently building. Expect copyable snippets and
                        diagrams.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="bloom">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Sample Lab: Interactive Content",
                  "Infra as Code starter",
                ].map((item, idx) => (
                  <Card key={idx}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{item}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Shipped pieces you can explore in the Labs.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="w-full max-w-3xl text-left mt-8" id="garden-telemetry">
          <h3 className="text-xl font-semibold mb-2 text-center">
            Garden telemetry
          </h3>
          <WakatimeWidget />
        </div>

        <div className="w-full max-w-3xl text-left mt-8" id="fun-facts">
          <h3 className="text-xl font-semibold mb-2 text-center">
            Fun facts & philosophy
          </h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="fact-1">
              <AccordionTrigger>
                Principle: ship tiny, ship often
              </AccordionTrigger>
              <AccordionContent>
                Small, repeatable wins beat massive, fragile launches. Labs
                reflect that rhythm.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="fact-2">
              <AccordionTrigger>My happy place</AccordionTrigger>
              <AccordionContent>
                Good docs, clean diagrams, and an hour of quiet to turn an idea
                into a minimal demo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="fact-3">
              <AccordionTrigger>What I’m optimizing for</AccordionTrigger>
              <AccordionContent>
                Real-world usefulness. If a lab doesn’t help you ship something
                better, it doesn’t belong here.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
      </div>
    </div>
  );
};

export default AboutPage;
