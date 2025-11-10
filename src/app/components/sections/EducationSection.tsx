"use client";
import { useGSAP } from "@gsap/react";

import SectionIntro from "./SectionIntro";
import EducationCard from "../ui/EducationCard";
import { gsapLib } from "@/lib/gsap";
import { portfolioConfig } from "@/site.config";

export default function EducationSection() {
  useGSAP(() => {
    const education = gsapLib.utils.toArray(
      "#education > div"
    ) as HTMLElement[];

    const tl = gsapLib.timeline({
      scrollTrigger: {
        trigger: "#education",
        start: () => {
          const windowWidth = window.innerWidth;

          const startOffset =
            windowWidth <= 768 ? "-120p center" : "top center";
          return startOffset;
        },
        end: () =>
          "+=" +
          (document.querySelector("#education") as HTMLElement).offsetHeight,
        scrub: 1,
        // markers: true,
      },
    });

    education.forEach((educ, i) => {
      tl.fromTo(
        educ,
        {
          y: 0,
          x: i % 2 === 0 ? 100 : -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        i * 0.2
      );
    });
  });

  return (
    <section className="min-h-screen flex flex-col">
      <SectionIntro sectionNumber="02" sectionTitle="Education" />
      <section
        id="education"
        className="flex flex-col min-h-screen mt-24 pt-24 handle-max-w"
      >
        {portfolioConfig.educationHistory.map((education, i) => (
          <EducationCard
            key={education.id}
            education={education}
            itemIndex={i}
          />
        ))}
      </section>
    </section>
  );
}
