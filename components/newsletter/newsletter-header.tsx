"use client";

import EmailOctopusNewsletterForm from "@/components/email-octopus-newsletter-form";

const NewsletterHeader = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2 sm:space-y-6">
        <h1 className="text-2xl font-semibold tracking-tighter sm:text-4xl">
          Cloud Drills Newsletter
        </h1>
        <p className="max-w-7xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          I started this newsletter to master cloud fundamentals through
          hands-on practice while sharing what I learn with fellow builders.
          Each week, I share a practical lab every Wednesday, going through the
          building blocks for working on more complex projects. It's my way of
          learning by doing and connecting with others on the same journey
          toward cloud mastery. Enter your email below to join me every week.
        </p>
      </div>

      <div className="border rounded p-2 max-w-7xl">
        <EmailOctopusNewsletterForm />
      </div>
    </div>
  );
};

export default NewsletterHeader;
