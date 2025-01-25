import { Sparkle } from "@/components/common/Icons";
import { Marquee } from "@/components/common/Marquee";
import { PORTFOLIO_APP_DATA } from "@/data/appData";
import { homePageData } from "@/data/homePage";
import React from "react";

const divideIntoFourParts = (array: any[]) => {
  const partSize = Math.ceil(array.length / 4); // Calculate the approximate size of each part
  const parts = [];

  for (let i = 0; i < array.length; i += partSize) {
    parts.push(array.slice(i, i + partSize));
  }

  return parts;
};

const SkillsSection = () => {
  // const { skills } = PORTFOLIO_APP_DATA.home;
  const {
    sections: {
      skills: { sectionTitle, skills },
    },
  } = homePageData;

  //
  const arr = divideIntoFourParts(skills);

  //
  const first = arr[0];
  const second = arr[1];
  const third = arr[2];
  const fourth = arr[3];

  return (
    <section className="flex flex-col gap-3">
      <h2 className="section-heading">{sectionTitle}</h2>

      {/*  */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {first.map((item: string, i: number) => (
          <div key={i} className="flex items-start justify-center gap-3">
            <h3 className="text-base font-semibold">{item}</h3>
            <Sparkle fill="#E9E9E9" />
          </div>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {second.map((item: string, i: number) => (
          <div key={i} className="flex items-start justify-center gap-3">
            <h3 className="text-base font-semibold">{item}</h3>
            <Sparkle fill="#E9E9E9" />
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {third.map((item: string, i: number) => (
          <div key={i} className="flex items-start justify-center gap-3">
            <h3 className="text-base font-semibold">{item}</h3>
            <Sparkle fill="#E9E9E9" />
          </div>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {fourth.map((item: string, i: number) => (
          <div key={i} className="flex items-start justify-center gap-3">
            <h3 className="text-base font-semibold">{item}</h3>
            <Sparkle fill="#E9E9E9" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default SkillsSection;
