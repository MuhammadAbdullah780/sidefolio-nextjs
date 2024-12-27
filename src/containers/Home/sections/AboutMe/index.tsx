import React from "react";

type Props = {};

const AboutMeSection = () => {
  return (
    <section>
      <p className="text-sm text-gray-600 dark:text-neutral-400">
        I am a seasoned graphic designer with over 14 years of experience in
        creating visually appealing and user-centric designs. My expertise spans
        across UI design, design systems, and custom illustrations, helping
        clients bring their digital visions to life.
      </p>
      <p className="text-sm mt-3 text-gray-600 dark:text-neutral-400">
        I am a seasoned graphic designer with over 14 years of experience in
        creating visually appealing and user-centric designs. My expertise spans
        across UI design, design systems, and custom illustrations, helping
        clients bring their digital visions to life.
      </p>

      {/* Contact Infos */}
      <ul className="flex mt-3 flex-col gap-2">
        <li className="flex items-center gap-x-2.5">
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <a
            className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
            href="#"
          >
            elianagarcia997@about.me
          </a>
        </li>
        <li className="flex items-center gap-x-2.5">
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <a
            className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
            href="#"
          >
            elianagarcia997@about.me
          </a>
        </li>
        <li className="flex items-center gap-x-2.5">
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <a
            className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
            href="#"
          >
            elianagarcia997@about.me
          </a>
        </li>
      </ul>
    </section>
  );
};

export default AboutMeSection;
