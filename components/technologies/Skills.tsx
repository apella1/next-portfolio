import { favoriteTechnologies } from "@/data/favoriteTechnologies";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="h-full overflow-auto px-4 sm:px-16 xl:px-28 2xl:px-72 py-8 2xl:py-12 flex flex-col">
      <section className="flex flex-col space-y-6 lg:space-y-8">
        <div className="flex flex-col space-y-6 lg:basis-1/2">
          <p className="xl:text-2xl font-semibold self-center">
            Programming Languages
          </p>
          <div className="w-[350px] mobile:w-[400px] self-center xl:w-full">
            <figure>
              <embed src="https://wakatime.com/share/@apella/f0e37590-b3d9-449f-be5d-957ea6789b5d.svg"></embed>
            </figure>
          </div>
        </div>
        <div className="flex flex-col space-y-6 lg:basis-1/2">
          <p className="xl:text-2xl font-semibold self-center">
            Code Editors/IDEs
          </p>
          <div className="w-[350px] mobile:w-[400px] self-center xl:w-full">
            <figure>
              <embed src="https://wakatime.com/share/@apella/8341732b-3c13-4ead-9332-1f5e36c54f41.svg"></embed>
            </figure>
          </div>
        </div>
        <div className="flex flex-col space-y-6 lg:basis-1/2">
          <p className="xl:text-2xl font-semibold text-center">
            Operating Systems
          </p>
          <div className="w-[350px] mobile:w-[400px] self-center xl:w-full">
            <figure>
              <embed src="https://wakatime.com/share/@apella/b456c7f1-e1c4-43a5-8ece-a04ff7c573bb.svg"></embed>
            </figure>
          </div>
        </div>
        <div className="flex flex-col space-y-6 lg:basis-1/2">
          <p className="xl:text-2xl font-semibold text-center">
            Coding Activity
          </p>
          <div className="w-[350px] mobile:w-[400px] self-center xl:w-full">
            <figure>
              <embed src="https://wakatime.com/share/@apella/99b28e19-3765-4df8-b982-35fadce51143.svg"></embed>
            </figure>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skills;
