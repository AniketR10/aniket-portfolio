"use client";
import { useGSAP } from "@gsap/react";

import SectionIntro from "./SectionIntro";
import ExperienceCard from "../ui/ExperienceCard";
import { gsapLib } from "@/lib/gsap";
import { portfolioConfig } from "@/site.config";

export default function ExperienceSection() {
  useGSAP(() => {
    const experiences = gsapLib.utils.toArray(".exp > div") as HTMLElement[];

    const tl = gsapLib.timeline({
      scrollTrigger: {
        trigger: "#experience",
        start: "96p bottom",
        end: () =>
          "+=" +
          (document.querySelector("#experience") as HTMLElement).offsetHeight,
        scrub: 1,
        // markers: true,
      },
    });

    experiences.forEach((exp, i) => {
      tl.fromTo(
        exp,
        {
          y: 0,
          x: i % 2 === 0 ? 100 : -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
        },
        i * 0.2
      );
    });
  });
  return (
    <>
      <SectionIntro sectionNumber="03" sectionTitle="Experience" />
      <section
        id="experience"
        className="min-h-screen px-4 pb-4 pt-24 mt-24 gap-2 mx-auto handle-max-w"
      >
        {portfolioConfig.experiences.map((exp) => (
          <ExperienceCard key={exp.company} {...exp} />
        ))}
      </section>
    </>
  );
}
