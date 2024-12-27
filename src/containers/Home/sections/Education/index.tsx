import React from "react";
import MilestoneCard from "../../MilestoneCard";

const EducationSection = () => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-medium text-gray-800 dark:text-neutral-200">
        Education
      </h2>

      {/* Bachelors */}
      <MilestoneCard
        title="University Of Karachi"
        dateRangeStr="March 2019 - April 2025"
        imageUrl="/me.avif"
        subTitle="Bachelor's in Computer Science"
        description="I am a seasoned graphic designer with over 14 years of experience in
      creating visually appealing and user-centric designs. My expertise
      spans across UI design, design systems, and custom illustrations,
      helping clients bring their digital visions to life."
      />
      <MilestoneCard
        title="University Of Karachi"
        dateRangeStr="March 2019 - April 2025"
        imageUrl="/me.avif"
        subTitle="Bachelor's in Computer Science"
        description="I am a seasoned graphic designer with over 14 years of experience in
      creating visually appealing and user-centric designs. My expertise
      spans across UI design, design systems, and custom illustrations,
      helping clients bring their digital visions to life."
      />
    </section>
  );
};

export default EducationSection;
