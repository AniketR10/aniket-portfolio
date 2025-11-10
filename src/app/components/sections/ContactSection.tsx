"use client";

import Image from "next/image";
import posthog from "posthog-js";
import { useGSAP } from "@gsap/react";
import { SiGmail, SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";

import SectionIntro from "./SectionIntro";
import { gsapLib } from "@/lib/gsap";
import { portfolioConfig } from "@/site.config";

export default function ContactSection() {
  useGSAP(() => {
    const timeline = gsapLib.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    timeline
      .from(".contact-title", {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power2.out",
      })
      .from(
        ".contact-image",
        {
          opacity: 0,
          x: -50,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .from(
        ".contact-text",
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .from(
        ".contact-icon",
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.6"
      );
  });

  const logContactClick = (contact: string) => {
    return () => {
      posthog.capture("click_contact_link", {
        contact,
      });
    };
  };

  return (
    <>
      <SectionIntro sectionNumber="04" sectionTitle="Contact" />
      <section
        id="contact"
        className="min-h-screen px-4 lg:my-24 pt-24 handle-max-w flex flex-col"
      >
        <h5 className="contact-title uppercase font-black mb-4 text-5xl lg:text-6xl xl:text-8xl">
          let&apos;s connect
        </h5>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex flex-col">
            <Image
              className="contact-image hidden lg:block h-full object-cover rounded-md"
              src={`/images/${portfolioConfig.contactImageFileName}`}
              alt={`Image of ${portfolioConfig.name}`}
              width={1500}
              height={500}
            />
          </div>
          <div className="flex flex-col space-y-5">
            <p className="contact-text text-xl text-justify">
              {portfolioConfig.contactHook}
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2">
                <SiGmail className="contact-icon size-14 xl:size-16" />
                <a
                  className="contact-text link font-medium xl:text-3xl"
                  href={`mailto:${portfolioConfig.email}`}
                  onClick={logContactClick("email")}
                >
                  {portfolioConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <SiLinkedin className="contact-icon size-14 xl:size-16" />
                <a
                  className="contact-text link font-medium xl:text-3xl"
                  href={`https://linkedin.com/in/${portfolioConfig.linkedInUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={logContactClick("linkedin")}
                >
                  linkedin.com/in/{portfolioConfig.linkedInUsername}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <SiGithub className="contact-icon size-14 xl:size-16" />
                <a
                  className="contact-text link font-medium xl:text-3xl"
                  href={`https://github.com/${portfolioConfig.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={logContactClick("github")}
                >
                  github.com/{portfolioConfig.githubUsername}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <SiInstagram className="contact-icon size-14 xl:size-16" />
                <a
                  className="contact-text link font-medium xl:text-3xl"
                  href={`https://instagram.com/${portfolioConfig.instagramUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={logContactClick("instagram")}
                >
                  instagram.com/{portfolioConfig.instagramUsername}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-center text-sm  pt-4 text-gray-500">
        &copy; {new Date().getFullYear()} {portfolioConfig.name}. All rights
        reserved.
      </footer>
    </>
  );
}
