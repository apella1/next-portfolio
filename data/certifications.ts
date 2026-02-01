import { Certification } from "@/utils/types";

export const certifications: Certification[] = [
  {
    id: "gcp-ace",
    title: "Associate Cloud Engineer",
    issuer: "Google Cloud Platform (GCP)",
    description:
      "Associate Cloud Engineers deploy applications, monitor operations, and manage enterprise solutions. They use Google Cloud Console and the command-line interface to perform common platform-based tasks to maintain one or more deployed solutions that leverage Google-managed or self-managed services on Google Cloud.",
    href: "https://www.credly.com/badges/b9c81d23-6fce-494c-8a69-99e97f2a2719/public_url",
    imageUrl:
      "./certification-badges/associate-cloud-engineer-certification.png",
  },
  {
    id: "gcp-pca",
    title: "Professional Cloud Architect",
    issuer: "Google Cloud Platform (GCP)",
    description:
      "Professional Cloud Architects enable organizations to leverage Google Cloud technologies. With a thorough understanding of cloud architecture and Google Cloud, they design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives.",
    href: "https://www.credly.com/badges/5643cd43-4c8a-4282-a44d-de034671f0cc/public_url",
    imageUrl:
      "./certification-badges/professional-cloud-architect-certification.png",
  },
];
