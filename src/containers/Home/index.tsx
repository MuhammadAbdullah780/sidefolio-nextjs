//
import MaxWidth from "@/components/common/MaxWidth";
import AboutMeSection from "./sections/AboutMe";
import EducationSection from "./sections/Education";
import ExperienceSection from "./sections/Experience";
import IntroSection from "./sections/Intro";
import ProjectSection from "./sections/Projects";
import SkillsSection from "./sections/Skills";

const HomeContainer = () => {
  return (
    <MaxWidth className="py-10 px-5 flex flex-col gap-5">
      <IntroSection />
      <AboutMeSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectSection />
      <section className="flex flex-col gap-2">
        <h2 className="section-heading">Contact</h2>
        <p>
          Looking to start a project or you need consultation? Feel free to
          contact me.
        </p>

        <div className="flex flex-col gap-1">
          <p className="text-xs">Karachi, Pakistan</p>
        </div>
      </section>
    </MaxWidth>
  );
};

export default HomeContainer;
