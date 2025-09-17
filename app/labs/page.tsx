import { getLabs } from "@/utils/labs";
import LabsClient from "./labs-client";

const LabsPage = async () => {
  const allLabs = await getLabs();

  return <LabsClient initialLabs={allLabs} />;
};

export default LabsPage;
