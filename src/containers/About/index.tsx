import { BlurFade } from "@/components/common/BlurFade";
import MaxWidth from "@/components/common/MaxWidth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutContainer = () => {
  return (
    <MaxWidth className="flex flex-col gap-5 py-10 px-5">
      {/* <h1 className="heading-1">About Me</h1> */}

      {/*  */}
      <p className="font-bold">
        Hi, I'm Muhammad Abdullah – Full-Stack Developer & AI Engineer.
      </p>

      {/* My img */}
      <BlurFade className="relative h-[350px] overflow-hidden rounded-md">
        <Image src="/about-banner.avif" alt="me" fill />
      </BlurFade>

      {/* Introductory Para */}
      <p>
        I’m a passionate problem-solver, driven by creating innovative digital
        solutions. With a Bachelor's degree in Computer Science and{" "}
        <strong>2+ years of professional experience</strong>, I specialize in
        building scalable and high-performance web applications using the latest
        technologies. From <strong>MERN stack development</strong> to{" "}
        <strong>Generative AI</strong>, I’ve worked on numerous projects that
        bridge the gap between technical possibilities and user needs. Whether
        it’s creating seamless, dynamic websites or developing intelligent AI
        systems, I am committed to delivering results that exceed expectations.
        I work closely with clients to understand their goals and deliver
        custom-tailored solutions that drive growth and success. In my spare
        time, I’m a gaming enthusiast, a cricket lover, and an avid football
        fan, always eager to explore new tech trends and tools. Let’s build
        something amazing together!
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
      <div>
        <p>
          <strong>I’m currently open for freelance opportunities.</strong> If
          you’re looking to work with a skilled developer who understands your
          needs, feel free to <strong>connect with me</strong>:
        </p>
        <div className="flex flex-col mt-2">
          <Link className="link w-fit" href="#">
            Hire Me on Upwork
          </Link>
          <Link className="link w-fit" href="#">
            Contact me Via Email
          </Link>
        </div>
      </div>

      {/*  */}
      <p>
        Thank you for being here, and I can't wait to embark on this adventure
        with you.
      </p>
    </MaxWidth>
  );
};

export default AboutContainer;
