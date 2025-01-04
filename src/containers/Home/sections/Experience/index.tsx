import React from "react";
import MilestoneCard from "../../MilestoneCard";
import { PORTFOLIO_APP_DATA } from "@/data/appData";

const ExperienceSection = () => {
  const { experience } = PORTFOLIO_APP_DATA.home;

  return (
    <section className="flex flex-col gap-3">
      <h2 className="section-heading">Experience</h2>

      {/*  */}
      <>
        {experience?.map((item, i) => {
          return (
            <MilestoneCard
              key={i}
              title={item.title}
              dateRangeStr={item.timeline}
              imageUrl={item.imageUrl}
              subTitle={item.subTitle}
              description={item.description}
            />
          );
        })}
      </>
    </section>
  );
};

export default ExperienceSection;
