//
import MaxWidth from "@/components/common/MaxWidth";
import AboutMeSection from "./sections/AboutMe";
import EducationSection from "./sections/Education";
import ExperienceSection from "./sections/Experience";
import IntroSection from "./sections/Intro";
import ProjectSection from "./sections/Projects";
import SkillsSection from "./sections/Skills";
import { ArrowRight } from "lucide-react";

const contactOperationTypes = [
  {
    id: "email",
    title: "You can Email Me Here",
    text: "ma0401431@gmail.com",
    onBtnClick: () => {},
  },
  {
    id: "phone",
    title: "Give Me a Call On",
    text: "+92 3353975358",
    onBtnClick: () => {},
  },
  {
    id: "chat-ai",
    title: "Chat with Me Live",
    text: "Click here to chat with me live",
    onBtnClick: () => {},
  },
  {
    id: "portfolio",
    title: "Portfolio",
    text: "View My Work",
    onBtnClick: () => {},
  },
];

const HomeContainer = () => {
  return (
    <MaxWidth className="py-10 px-5 flex flex-col gap-5">
      <IntroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectSection />
      <EducationSection />
      <ExperienceSection />
      <section className="flex flex-col gap-2">
        <h2 className="section-heading">Get in Touch</h2>
        <p>
          Have a question or want to collaborate? Reach out to me—I’d love to
          hear from you! Let’s connect and create something amazing together.
        </p>
        <div className="grid grid-cols-2 gap-3 mt-1">
          {contactOperationTypes.map((item) => {
            return (
              <div
                key={item.id}
                className="col-span-1 flex items-center bg-white border rounded-md px-4 py-2 justify-between gap-2"
              >
                <div className="flex flex-col">
                  <h6 className="heading-xs !text-gray-600">{item.title}</h6>
                  <small className="para !text-gray-900">{item?.text}</small>
                </div>
                <button className="p-1.5 border border-divider hover:bg-[#f1f1f1] rounded-md transition-all duration-300">
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </MaxWidth>
  );
};

export default HomeContainer;
