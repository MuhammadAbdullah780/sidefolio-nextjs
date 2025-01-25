"use client";
import { LinkPreview } from "@/components/common/LinkPreview";
import { PORTFOLIO_APP_DATA } from "@/data/appData";
import { homePageData } from "@/data/homePage";
import Link from "next/link";
import React, { useMemo } from "react";

const AboutMeSection = () => {
  const { contactInfo, description } = PORTFOLIO_APP_DATA.home.aboutMe;

  const { shortIntro, socialLinks } = homePageData;

  const contactInfoMapper = useMemo(() => {
    return [
      {
        icon: <></>,
        text: contactInfo.email,
        href: "#",
      },
      {
        icon: <></>,
        text: contactInfo.github,
        href: "#",
      },
      {
        icon: <></>,
        text: contactInfo.linkedin,
        href: "#",
      },
    ];
  }, []);

  return (
    <section className="flex flex-col gap-1" >
      {shortIntro?.map((desc, i) => {
        return <p key={i}>{desc}</p>;
      })}

      {/* Contact Infos */}
      <ul className="flex mt-3 flex-col gap-2">
        {socialLinks?.map((item, i) => {
          return (
            <li key={i} className="flex items-center gap-x-2.5">
              <svg
                className="shrink-0 size-3.5 stroke-gray-500"
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
              <Link className="link" href={item?.url} target="_blank">
                {item?.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AboutMeSection;
