import Image from "next/image";
import posthog from "posthog-js";
import { FaGithub } from "react-icons/fa6";

import Tag from "./Tag";
import { Project } from "@/types/common/project";

export default function ProjectCard({
  date,
  description,
  imageAlt,
  isUnderDevelopment,
  projectGithubLink,
  projectTags,
  title,
  imageFileName,
  imageLink,
  projectUrl,
}: Project) {
  return (
    <section className="project-section">
      <div className="handle-max-w h-full flex flex-col">
        <h4 className="uppercase font-black text-5xl">{title}</h4>
        <div className="flex flex-col space-y-2">
          <p className="text-xl text-justify lg:text-2xl">{description}</p>
          <p className="font-black uppercase">{date}</p>
          <div className="group relative self-start w-full">
            {projectUrl ? (
              <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                <Image
                  className="object-cover w-full max-h-72 xl:max-h-[25rem] rounded-sm cursor-pointer"
                  src={imageLink ? imageLink : `/images/${imageFileName}`}
                  width={1200}
                  height={520}
                  alt={imageAlt}
                />
              </a>
            ) : (
              <Image
                className="object-cover w-full max-h-72 xl:max-h-[25rem] rounded-sm"
                src={imageLink ? imageLink : `/images/${imageFileName}`}
                width={1200}
                height={520}
                alt={imageAlt}
              />
            )}
          </div>
          {isUnderDevelopment ? (
            <p className="text-center text-2xl font-bold">
              Currently under{" "}
              <a
                href={projectGithubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
                onClick={() => {
                  posthog.capture("view_project", {
                    project: title,
                  });
                }}
              >
                development
              </a>
            </p>
          ) : (
            Array.isArray(projectTags) && (
              <div className="flex justify-center md:justify-start items-center mt-2 flex-wrap gap-3">
                {projectTags.map((tag) => {
                  return <Tag key={tag} content={tag} />;
                })}
                <a
                  href={projectGithubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    posthog.capture("view_project", {
                      project: title,
                    });
                  }}
                >
                  <span
                    aria-label={`open ${projectGithubLink}`}
                    aria-hidden="true"
                  ></span>
                  <FaGithub className="size-10 cursor-pointer hover-translate-up" />
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
