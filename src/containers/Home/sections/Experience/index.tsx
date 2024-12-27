import React from "react";
import MilestoneCard from "../../MilestoneCard";

const ExperienceSection = () => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-medium text-gray-800 dark:text-neutral-200">
        Experience
      </h2>

      {/*  */}
      <MilestoneCard
        title="Expedey"
        dateRangeStr="March 2019 - April 2025"
        imageUrl="/me.avif"
        subTitle="Full Stack Developer"
        description="I am a seasoned graphic designer with over 14 years of experience in
      creating visually appealing and user-centric designs. My expertise
      spans across UI design, design systems, and custom illustrations,
      helping clients bring their digital visions to life."
      />
    </section>
  );
};

export default ExperienceSection;
