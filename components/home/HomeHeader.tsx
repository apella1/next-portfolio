import Image from "next/image";
import Programming from "@/public/programming.png"

const HomeHeader = () => {
  return (
    <section className="px-4 sm:px-16 lg:px-28 2xl:px-52 py-8 lg:py-28 h-screen">
      <div><Image src={Programming} alt="" className="w-[600px]"/></div>
      <div></div>
    </section>
  );
};

export default HomeHeader;
