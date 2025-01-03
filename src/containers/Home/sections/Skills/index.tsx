import { Sparkle } from "@/components/common/Icons";
import { Marquee } from "@/components/common/Marquee";
import React from "react";

type Props = {};

const SkillsSection = (props: Props) => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JS",
    "React JS",
    "Next JS",
    "Gatsby JS",
    "Vue JS",
    "Tailwind CSS",
    "SCSS",
  ];
  const backendSkills = [
    "Node JS",
    "Express JS",
    "Nest JS",
    "Fast API",
    "Django",
    "Flask",
  ];
  const extraSkills = [
    "Python",
    "Javascript",
    "Mongodb",
    "Sequelize",
    "Type ORM",
    "Contentful",
    "Strapi",
    "Sanity",
    "Firebase",
    "Generative AI",
    "Lang Chain",
    "AI",
    "AWS",
    "Chroma DB",
    "Neon DB",
  ];

  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-medium text-gray-800 dark:text-neutral-200">
        Skills
      </h2>

      {/*  */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {frontendSkills.map((item) => (
          <div className="flex items-start justify-center gap-3">
            <h3 className="text-base font-semibold">{item}</h3>
            <Sparkle fill="#E9E9E9" />
          </div>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {backendSkills.map((item) => (
          <div className="flex items-start justify-center gap-3">
            <h3 className="text-base font-semibold">{item}</h3>
            <Sparkle fill="#E9E9E9" />
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {extraSkills.map((item) => (
          <div className="flex items-start justify-center gap-3">
            <h3 className="text-base font-semibold">{item}</h3>
            <Sparkle fill="#E9E9E9" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default SkillsSection;
