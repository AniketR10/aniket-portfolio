"use client";

import { gsapLib } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiDocker,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

import SectionIntro from "./SectionIntro";
import BrandTile from "../ui/BrandTile";

const brands = [
  {
    id: 0,
    title: "HTML5",
    hexColor: "#E34F26",
    icon: <FaHtml5 className="brand" />,
  },
  {
    id: 1,
    title: "CSS3",
    hexColor: "#1572B6",
    icon: <FaCss3Alt className="brand" />,
  },
  {
    id: 2,
    title: "React",
    hexColor: "#61DAFB",
    icon: <FaReact className="brand" />,
  },
  {
    id: 3,
    title: "TypeScript",
    hexColor: "#3178C6",
    icon: <SiTypescript className="brand" />,
  },
  {
    id: 4,
    title: "Tailwind CSS",
    hexColor: "#38B2AC",
    icon: <SiTailwindcss className="brand" />,
  },
  {
    id: 5,
    title: "Next.js",
    hexColor: "#000000",
    icon: <SiNextdotjs className="brand" />,
  },
  {
    id: 6,
    title: "Node.js",
    hexColor: "#339933",
    icon: <FaNodeJs className="brand" />,
  },
  {
    id: 7,
    title: "MongoDB",
    hexColor: "#47A248",
    icon: <SiMongodb className="brand" />,
  },
  {
    id: 8,
    title: "Express.js",
    hexColor: "#343434",
    icon: <SiExpress className="brand" />,
  },
  {
    id: 9,
    title: "PostgreSQL",
    hexColor: "#4169E1",
    icon: <SiPostgresql className="brand" />,
  },
  {
    id: 10,
    title: "Prisma",
    hexColor: "#0C344B",
    icon: <SiPrisma className="brand" />,
  },
  {
    id: 11,
    title: "Docker",
    hexColor: "#2496ED",
    icon: <SiDocker className="brand" />,
  },
  {
    id: 12,
    title: "Git",
    hexColor: "#F05032",
    icon: <FaGitAlt className="brand" />,
  },
  {
    id: 13,
    title: "Python",
    hexColor: "#3776AB",
    icon: <FaPython className="brand" />,
  },
];

export default function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const brands = gsapLib.utils.toArray(".brand-container") as HTMLElement[];

    brands.forEach((brand, i) => {
      gsapLib.fromTo(
        brand,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: brand,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <SectionIntro sectionNumber="03" sectionTitle="Tech Stack" />
      <section
        id="tech-stack"
        ref={containerRef}
        className="min-h-screen px-4 flex flex-col gap-4 mt-24 pt-24 handle-max-w"
      >
        <p className="text-2xl text-justify">
          Here are the tools / technologies I enjoy working with. I&apos;m
          always eager to expand my skill set and stay current with the latest
          technology trends.
        </p>
        <div className="grid gap-3 place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {brands.map((brand) => (
            <BrandTile key={brand.id} {...brand} />
          ))}
        </div>
      </section>
    </>
  );
}
