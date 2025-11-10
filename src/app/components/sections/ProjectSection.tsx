"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import SectionIntro from "./SectionIntro";
import ProjectCard from "../ui/ProjectCard";
import { gsapLib } from "@/lib/gsap";
import { portfolioConfig } from "@/site.config";

export default function ProjectSection() {
  const scrollContainer = useRef(null);

  useGSAP(
    () => {
      const projectSections = gsapLib.utils.toArray("#projects > section");

      gsapLib.to(projectSections, {
        xPercent: -100 * (projectSections.length - 1),
        ease: "none",
        scrollTrigger: {
          // markers: true,
          start: "100p top",
          trigger: scrollContainer.current,
          pin: true,
          scrub: 1,
          snap: 1 / (projectSections.length - 1),
          end: () =>
            "+=" +
            (scrollContainer.current as unknown as HTMLElement).offsetWidth,
        },
      });
    },
    {
      scope: scrollContainer,
    }
  );

  return (
    <>
      <SectionIntro sectionNumber="01" sectionTitle="Projects" />
      <section
        id="projects"
        ref={scrollContainer}
        // ? extra padding top to account for the start of gsap scroll
        // ? width must be based on the number of sections
        className={`h-full pt-16 xl:pt-0 w-[${
          portfolioConfig.projects.length * 100
        }vw] flex flex-nowrap`}
      >
        {portfolioConfig.projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
    </>
  );
}
