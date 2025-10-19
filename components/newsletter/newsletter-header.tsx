"use client";

import EmailOctopusNewsletterForm from "@/components/email-octopus-newsletter-form";

const NewsletterHeader = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tighter sm:text-4xl">
          Cloud Drills Newsletter
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Join a growing circle of builders who learn through doing. One
          hands-on labs each week. Focused and practical.
        </p>
      </div>

      <div className="max-w-md">
        <EmailOctopusNewsletterForm />
      </div>
    </div>
  );
};

export default NewsletterHeader;
