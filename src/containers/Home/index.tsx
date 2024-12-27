"use client";

//
import MaxWidth from "@/components/common/MaxWidth";
import AboutMeSection from "./sections/AboutMe";
import EducationSection from "./sections/Education";
import ExperienceSection from "./sections/Experience";
import IntroSection from "./sections/Intro";

const HomeContainer = () => {
  return (
    <MaxWidth className="py-10 px-5 flex flex-col gap-5">
      <IntroSection />
      <AboutMeSection />
      <EducationSection />
      <ExperienceSection />
    </MaxWidth>
  );
};

export default HomeContainer;
