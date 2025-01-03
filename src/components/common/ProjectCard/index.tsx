import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GithubLinkIcon, GlobeIcon } from "../Icons";

type Props = {
  startDate: string;
  endDate: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  skillsUsed: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const ProjectCard: React.FC<Props> = ({
  description,
  endDate,
  imgAlt,
  imgSrc,
  githubUrl,
  liveUrl,
  skillsUsed,
  startDate,
  title,
}) => {
  return (
    <div className="col-span-1 rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg h-full">
      <div className="block overflow-hidden relative cursor-pointer w-full h-40">
        <Image
          src={imgSrc}
          className="hover:scale-110 transition-all duration-300"
          alt={imgAlt}
          fill
        />
      </div>
      <div className="flex flex-col gap-1 px-2">
        <h3 className="font-semibold text-sm text-gray-800 mt-2 tracking-tight">
          {title}
        </h3>
        <span className="font-semibold text-gray-500 text-xs">
          {startDate} - {endDate}
        </span>

        <p className="text-xs line-clamp-4 text-gray-600 w-full">
          {description}
        </p>
      </div>
      <div className="text-sm mt-auto flex flex-col px-2">
        <div className="mt-2 flex flex-wrap gap-1">
          {skillsUsed.map((tech) => (
            <div
              key={tech}
              className="inline-flex items-center rounded-md border border-gray-200 font-semibold bg-gray-100 px-1 py-0 text-[10px]"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-1 flex-wrap gap-1 items-center pt-2 px-2 pb-2">
        {liveUrl && (
          <Link
            href={liveUrl}
            target="_blank"
            className="items-center rounded-md border font-semibold border-gray-200 bg-gray-100 shadow flex gap-1 px-2 py-1 text-[10px]"
            rel="noopener noreferrer"
          >
            <GlobeIcon />
            Website
          </Link>
        )}

        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            className="items-center rounded-md border font-semibold border-gray-200 bg-gray-100 shadow flex gap-1 px-2 py-1 text-[10px]"
            rel="noopener noreferrer"
          >
            <GithubLinkIcon />
            Github
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
