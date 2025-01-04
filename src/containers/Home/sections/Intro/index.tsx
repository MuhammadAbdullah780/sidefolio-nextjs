import TextFlip from "@/components/common/TextFlip";
import { PORTFOLIO_APP_DATA } from "@/data/appData";
import Image from "next/image";
import React from "react";

const IntroSection = () => {
  const { image, name, skils } = PORTFOLIO_APP_DATA.home.intro;

  return (
    <section className="flex items-center gap-x-3">
      <div className="shrink-0">
        <Image
          alt={name || "#"}
          className="shrink-0 rounded-full"
          src={image}
          width={64}
          height={64}
        />
      </div>

      <div className="grow">
        <h1 className="heading-1">{name}</h1>
        <TextFlip words={skils} />
      </div>
    </section>
  );
};

export default IntroSection;
