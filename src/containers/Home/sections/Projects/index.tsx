import { GlobeIcon } from "@/components/common/Icons";
import ProjectCard from "@/components/common/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectSection: React.FC<{}> = () => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-medium text-gray-800 dark:text-neutral-200">
        My Work
      </h2>

      <div className="grid gap-3 items-stretch grid-cols-2">
        {[0, 1, 2, 3]?.map((item) => {
          return (
            <ProjectCard
              description="I am a seasoned graphic designer with over 14 years of experience in
                           creating visually appealing and user-centric designs. My expertise spans
                           across UI design, design systems, and custom illustrations, helping
                           clients bring their digital visions to life."
              endDate="Apr 2021"
              startDate="Feb 2021"
              imgAlt="#"
              liveUrl="https://muhammadabdullah.vercel.app"
              githubUrl="https://github.com/MuhammadAbdulah780"
              imgSrc="/project.jpg"
              skillsUsed={[
                "HTML",
                "CSS",
                "JS",
                "React JS",
                "Node JS",
                "Tailwind CSS",
              ]}
              title="Project Title"
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
