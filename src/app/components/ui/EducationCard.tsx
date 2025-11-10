"use client";

import Image from "next/image";

import { Education } from "@/types/common/education";

export default function EducationCard({
  education: {
    date,
    description,
    imageAlt,
    imageFileName,
    imageSource,
    schoolName,
  },
  itemIndex,
}: {
  education: Education;
  itemIndex: number;
}) {
  return (
    <div
      className={`flex flex-col p-4 md:items-center md:gap-2 ${
        itemIndex % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="block md:hidden">
        <h5 className="text-2xl font-black">{schoolName}</h5>
        <span className="font-bold">{date}</span>
      </div>

      <div className="group w-full relative">
        <div className="relative h-80">
          <Image
            className="object-cover rounded-sm  group-hover:brightness-50 transition-all duration-500"
            alt={imageAlt}
            src={`/images/${imageFileName}`}
            fill
          />
        </div>
        <div className="absolute top-0 right-0 p-2 opacity-0 text-white font-black group-hover:opacity-100 transition duration-300 ease-in-out">
          <span className="link">
            <a href={imageSource} target="_blank" rel="noopener noreferrer">
              Source
            </a>
          </span>
        </div>
      </div>

      <div className="flex flex-col md:max-w-[60%]">
        <div className="hidden md:block">
          <h5 className="text-2xl font-black lg:text-4xl">{schoolName}</h5>
          <span className="font-bold">{date}</span>
        </div>
        <p className="text-justify lg:text-xl">{description}</p>
      </div>
    </div>
  );
}
