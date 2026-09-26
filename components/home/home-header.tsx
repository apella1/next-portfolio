import Image from "next/image";
import profilePic from "@/public/profile.webp";
import HomeIntro from "@/components/home/home-intro";

export default function HomeHeader() {
  return (
    <header className="py-8 flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0">
      <div className="w-fit rounded-full">
        <Image src={profilePic} alt="" className="w-44 rounded-full" />
      </div>
      <HomeIntro />
    </header>
  );
}
