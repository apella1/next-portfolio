"use client";

import EmailOctopusNewsletterForm from "@/components/email-octopus-newsletter-form";

const NewsletterHeader = () => {
  return (
    <div className="space-y-6 mb-12">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Cloud Native DevOps Newsletter 📰
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Join 4k+ subscribers that are getting my weekly newsletter of cloud
          native goodness.
        </p>
      </div>

      <div className="max-w-md">
        <EmailOctopusNewsletterForm />
      </div>
    </div>
  );
};

export default NewsletterHeader;
