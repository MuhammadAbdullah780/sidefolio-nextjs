import { Button } from "@/components/common/Button";
import ProjectCard from "@/components/common/ProjectCard";
import { PORTFOLIO_APP_DATA } from "@/data/appData";
import { homePageData } from "@/data/homePage";
import React from "react";

const ProjectSection: React.FC<{}> = () => {
  const { projects } = PORTFOLIO_APP_DATA.home;
  const {
    sections: {
      projects: { recentProjects, sectionTitle },
    },
  } = homePageData;

  return (
    <section className="flex flex-col gap-3">
      <h2 className="section-heading">{sectionTitle}</h2>

      <div className="grid gap-3 items-stretch grid-cols-2">
        {/*  */}
        {recentProjects?.slice(0, 2)?.map((item, i) => {
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

      <Button size="base" >View All Projects</Button>
    </section>
  );
};

export default ProjectSection;
