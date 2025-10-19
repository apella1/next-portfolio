import { getLabs } from "@/utils/labs";
import NewsletterClient from "./newsletter-client";

const LabsPage = async () => {
  const allLabs = await getLabs();

  return <NewsletterClient initialLabs={allLabs} />;
};

export default LabsPage;
