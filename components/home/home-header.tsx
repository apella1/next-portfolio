import Image from "next/image";
import profilePic from "@/public/profile.webp";

export default function HomeHeader() {
  return (
    <header className="py-8 flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
      <div className="w-fit rounded-full">
        <Image src={profilePic} alt="" className="w-44 rounded-full" />
      </div>
      <h1 className="text-lg">
        Hi, I'm John Apella. I'm a software engineer moving into cloud security,
        building on 4+ years in fullstack and DevOps on GCP.
      </h1>
    </header>
  );
}
