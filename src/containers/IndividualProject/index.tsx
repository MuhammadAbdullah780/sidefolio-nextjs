import { BlurFade } from "@/components/common/BlurFade";
import MaxWidth from "@/components/common/MaxWidth";
import Image from "next/image";
import React from "react";

type Props = {};

const IndividualProjectContainer = (props: Props) => {
  return (
    <MaxWidth className="py-10 px-5 flex flex-col gap-5">
      <BlurFade className="relative h-[300px] overflow-hidden rounded-md">
        <Image
          src="/about-banner.avif"
          className="object-cover"
          alt="me"
          fill
        />
      </BlurFade>
      <h1 className="heading-1">Side Folio APP</h1>

      <section className="flex flex-col gap-5">
        {/* Introductory Para */}
        <p>
          I’m a passionate problem-solver, driven by creating innovative digital
          solutions. With a Bachelor's degree in Computer Science and{" "}
          <strong>2+ years of professional experience</strong>, I specialize in
          building scalable and high-performance web applications using the
          latest technologies. From <strong>MERN stack development</strong> to{" "}
          <strong>Generative AI</strong>, I’ve worked on numerous projects that
          bridge the gap between technical possibilities and user needs. Whether
          it’s creating seamless, dynamic websites or developing intelligent AI
          systems, I am committed to delivering results that exceed
          expectations. I work closely with clients to understand their goals
          and deliver custom-tailored solutions that drive growth and success.
          In my spare time, I’m a gaming enthusiast, a cricket lover, and an
          avid football fan, always eager to explore new tech trends and tools.
          Let’s build something amazing together!
        </p>

        <p>
          I possess a wide range of skills across{" "}
          <strong>Frontend, Backend, AI, and Cloud Infrastructure</strong> to
          ensure end-to-end development of your project.
        </p>

        {/* Will Render Skills Globe */}

        {/* Testimonials  intro */}
        <p>
          I value client feedback and have built strong, lasting relationships
          through my work. I’m proud to have received positive reviews for my
          dedication and the quality of work I deliver.{" "}
          <strong>“See what others think about me”</strong>
        </p>

        {/* Will Render Testimonials */}

        {/* Contact Sect */}
        <p>
          <strong>I’m currently open for freelance opportunities.</strong> If
          you’re looking to work with a skilled developer who understands your
          needs, feel free to <strong>connect with me</strong>:
        </p>

        {/*  */}
        <p>
          Thank you for being here, and I can't wait to embark on this adventure
          with you.
        </p>
      </section>
    </MaxWidth>
  );
};

export default IndividualProjectContainer;
