import Programming from "@/public/programming.png";
import Image from "next/image";

const HomeHeader = () => {
  return (
    <header className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-4 px-4 sm:px-16 xl:px-28 2xl:px-52 py-8 lg:py-28 h-screen">
      <div className="lg:basis-1/2">
        <Image src={Programming} alt="" className="w-[600px]" />
      </div>
      <div className="lg:basis-1/2 flex flex-col space-y-3 xl:space-y-6">
        <h1 className="self-center text-center font-extrabold mx-8 lg:mx-0 text-3xl xl:text-5xl font-inter">
          Frontend Software Engineer
        </h1>
        <div className="self-center font-poppins text-lg xl:text-xl px-8 flex flex-col space-y-4 text-center">
          <p className="">
            With expertise in TypeScript, React, Next.js and React Native and a
            strong focus on creating user-centric and performant applications,
            I'm dedicated to crafting seamless digital experiences that leave a
            lasting impact.
          </p>
          <p>
            Whether it's building innovative web interfaces or developing mobile
            applications, I thrive on pushing the boundaries of what's possible
            with cutting-edge technologies. Explore my projects and let's bring
            your ideas to life together.
          </p>
        </div>
        <a
          href="/projects"
          className="self-center py-4 px-10 border border-[#076115] font-semibold hover:bg-[#076115] hover:animate-pulse hover:text-white"
        >
          Portfolio
        </a>
      </div>
    </header>
  );
};

export default HomeHeader;
