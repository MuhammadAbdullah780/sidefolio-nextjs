import MaxWidth from "@/components/common/MaxWidth";
import ProjectCard from "@/components/common/ProjectCard";
import { homePageData } from "@/data/homePage";
import React from "react";

type Props = {};

const ProjectListingContainer = (props: Props) => {
  const {
    sections: {
      projects: { recentProjects },
    },
  } = homePageData;

  return (
    <MaxWidth className="py-10 px-5 flex flex-col gap-7">
      <section className="flex flex-col gap-2">
        <h1 className="font-semibold">What I’ve Built</h1>
        <p>
          Explore the practical side of my coding journey — real projects, real
          use-cases. These applications blend performance, usability, and the
          latest web technologies into polished digital products.
        </p>
      </section>

      <section className="flex flex-wrap justify-center sm:grid sm:grid-cols-2 gap-5">
        {[
          ...recentProjects,
          ...recentProjects,
          ...recentProjects,
          ...recentProjects,
        ]?.map((proj, i) => {
          return (
            <ProjectCard isViewable id={`${i}`} key={i} {...{ ...proj }} />
          );
        })}
      </section>
    </MaxWidth>
  );
};

export default ProjectListingContainer;
