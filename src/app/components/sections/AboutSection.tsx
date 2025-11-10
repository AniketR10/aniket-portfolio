"use client";

import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Mogra } from "next/font/google";

import { portfolioConfig } from "@/site.config";

const mogra = Mogra({
  weight: "400",
  subsets: ["latin"],
});

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row-reverse mt-24 handle-max-w"
    >
      <div
        className={`${mogra.className} flex flex-col justify-center items-center w-full space-y-2 p-4 `}
      >
        <div className="flex flex-col items-center space-y-5">
          <h1 className="text-2xl lg:text-4xl">What&apos;s up?</h1>
          <p className="text-5xl text-center">
            I&apos;m {portfolioConfig.name}
          </p>
        </div>
        <Image
          className="size-50 rounded-full lg:hidden"
          priority
          src={`/images/${portfolioConfig.smallViewPortImageFileName}`}
          alt={`Image of ${portfolioConfig.name}`}
          width={200}
          height={200}
        />
        <div className="group relative">
          <Image
            className="hidden h-full lg:block"
            priority
            src={`/images/${portfolioConfig.largeViewPortImageFileName}`}
            alt={`Image of ${portfolioConfig.name}`}
            width={400}
            height={1200}
          />
          {/* uncomment if the photo was taken by someone else and you’d like to give them credit. */}
          {/* <div className="hidden lg:block absolute top-40 -right-5 p-2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <span className="text-light-black text-lg">
              Snapped by{" "}
              <a
                href="https://www.instagram.com/someone"
                target="_blank"
                className="link"
              >
                Maki
              </a>
            </span>
          </div> */}
        </div>
      </div>
      <section className="flex flex-col p-4 space-y-4 lg:w-11/12 lg:justify-center handle-max-w">
        <h3 className="text-xl font-black lg:text-4xl">About me</h3>
        <p className="lg:text-xl text-justify">{portfolioConfig.aboutMe}</p>
        <a
          href={`/${portfolioConfig.resumeFileName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex px-4 py-3 font-medium text-white text-xl bg-black transition-colors hover:bg-black/80 duration-200 self-start gap-3 rounded-md items-center"
        >
          Resume
          <FaExternalLinkAlt />
        </a>
      </section>
    </section>
  );
}
