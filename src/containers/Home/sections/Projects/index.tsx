import ProjectCard from "@/components/common/ProjectCard";
import { PORTFOLIO_APP_DATA } from "@/data/appData";
import React from "react";

const ProjectSection: React.FC<{}> = () => {
  const { projects } = PORTFOLIO_APP_DATA.home;

  return (
    <section className="flex flex-col gap-3">
      <h2 className="section-heading">My Work</h2>

      <div className="grid gap-3 items-stretch grid-cols-2">
        {/*  */}
        {projects?.map((item, i) => {
          return (
            <ProjectCard
              key={i}
              description={item?.description}
              endDate={item?.startDate}
              startDate={item?.endDate}
              imgAlt={item?.imgAlt}
              liveUrl={item?.liveUrl}
              githubUrl={item?.githubUrl}
              imgSrc={item?.imgSrc}
              skillsUsed={item?.skillsUsed}
              title={item?.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
