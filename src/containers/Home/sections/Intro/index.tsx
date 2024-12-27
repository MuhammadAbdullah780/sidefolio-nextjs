import TextFlip from "@/components/common/TextFlip";
import Image from "next/image";
import React from "react";

const IntroSection = () => {
  return (
    <section className="flex items-center gap-x-3">
      <div className="shrink-0">
        <Image
          alt="#"
          className="shrink-0 rounded-full"
          src="/me.avif"
          width={64}
          height={64}
        />
      </div>

      <div className="grow">
        <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
          Eliana Garcia
        </h1>
        {/* <p className="text-sm text-gray-600 dark:text-neutral-400">
            Full Stack Developer
          </p> */}
        <TextFlip
          words={[
            "Full Stack Developer",
            "Back End Developer",
            "Gen AI Expert",
            "Python Guru",
            "Nest JS Mastero",
            "Mern Stack Dev",
          ]}
        />
      </div>
    </section>
  );
};

export default IntroSection;
