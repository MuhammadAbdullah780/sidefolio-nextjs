"use client";
import { GithubIconOutlined } from "@/components/common/Icons";
import { PORTFOLIO_APP_DATA } from "@/data/appData";
import { homePageData } from "@/data/homePage";
import { JSX, useMemo } from "react";
import { FaEnvelope, FaPhone, FaTwitter, FaUpwork } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiLinkedinLine } from "react-icons/ri";
import Link from "next/link";
import { LuMessageSquareText } from "react-icons/lu";
import { FiMessageSquare, FiTwitter } from "react-icons/fi";

type Platform = "github" | "linkedin" | "upwork" | "fiver" | "phone";

const AboutMeSection = () => {
  const { contactInfo, description } = PORTFOLIO_APP_DATA.home.aboutMe;

  const { shortIntro, socialLinks } = homePageData;

  const platformToIconMapper: Record<Platform, JSX.Element> = useMemo(() => {
    return {
      github: (
        <GithubIconOutlined
          width={20}
          height={20}
          className="stroke-[#6b7280]"
        />
      ),
      linkedin: <RiLinkedinLine size={18} strokeWidth={1.5} stroke="#6b7280" fill="#6b7280" />,
      upwork: <FaUpwork size={20} strokeWidth={1.5} fill="#6b7280" />,
      fiver: (
        <svg
          fill="#6b7280"
          width="16px"
          height="16px"
          viewBox="-2.5 -2 24 24"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin"
          className=""
        >
          <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z" />
          <circle cx="14.375" cy="1.875" r="1.875" />
        </svg>
      ),
      phone: <FaPhone size={15} strokeWidth={1.5} fill="#6b7280" />,
      message: <FiMessageSquare size={17} strokeWidth={2.5} stroke="#6b7280" />,
      twitter: <FiTwitter size={15} strokeWidth={2.5} stroke="#6b7280" />,
    };
  }, [socialLinks]);

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
    <section className="flex flex-col gap-3">
      {shortIntro?.map((desc, i) => {
        return <p key={i}>{desc}</p>;
      })}

      {/* Contact Infos */}
      <div>
        <p>You can reach me out through</p>
        <ul className="flex mt-2 gap-2">
          {socialLinks?.map((item, i) => {
            const Elem = platformToIconMapper[item.platform as Platform];
            return (
              // <li key={i} className="flex items-center gap-x-2.5">
              //   <svg
              //     className="shrink-0 size-3.5 stroke-gray-500"
              //     xmlns="http://www.w3.org/2000/svg"
              //     width="24"
              //     height="24"
              //     viewBox="0 0 24 24"
              //     fill="none"
              //     stroke="currentColor"
              //     strokeWidth="2"
              //     strokeLinecap="round"
              //     strokeLinejoin="round"
              //   >
              //     <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              //     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              //   </svg>
              //   <Link className="link" href={item?.url} target="_blank">
              //     {item?.text}
              //   </Link>
              // </li>
              <Link
                href={item?.url}
                target="_blank"
                className="w-[35px] cursor-pointer h-[35px] aspect-square border flex items-center justify-center bg-white border-gray-200 hover:bg-[#f1f1f1] rounded-full transition-all duration-300"
              >
                {Elem}
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AboutMeSection;
