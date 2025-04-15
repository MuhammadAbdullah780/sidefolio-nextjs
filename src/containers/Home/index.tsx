//
import MaxWidth from "@/components/common/MaxWidth";
import AboutMeSection from "./sections/AboutMe";
import EducationSection from "./sections/Education";
import ExperienceSection from "./sections/Experience";
import IntroSection from "./sections/Intro";
import ProjectSection from "./sections/Projects";
import SkillsSection from "./sections/Skills";
import { ArrowRight } from "lucide-react";
import { AnimatedTestimonials } from "@/components/common/AnimatedTestimonial";

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

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HomeContainer = () => {
  return (
    <MaxWidth className="py-10 px-5 flex flex-col gap-7">
      <IntroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectSection />
      <EducationSection />
      <ExperienceSection />

      <section className="flex flex-col">
        <h2 className="section-heading">Testimonials</h2>
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </section>

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
