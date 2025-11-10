"use client";

import { useEffect, useState, useCallback } from "react";
import { FaAngleRight } from "react-icons/fa6";

import { gsapLib } from "@/lib/gsap";
import { portfolioConfig } from "@/site.config";

enum Sections {
  ABOUT = "about",
  PROJECTS = "projects",
  EDUCATION = "education",
  EXPERIENCE = "experience",
  TECH_STACK = "tech-stack",
  CONTACT = "contact",
}

const NAVIGATION_LINKS = [
  { section: Sections.ABOUT, label: "About" },
  { section: Sections.PROJECTS, label: "Projects" },
  { section: Sections.EDUCATION, label: "Education" },
  { section: Sections.EXPERIENCE, label: "Experience" },
  { section: Sections.TECH_STACK, label: "Stack" },
  { section: Sections.CONTACT, label: "Contact" },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePath, setActivePath] = useState(Sections.ABOUT);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  // ? Intersection observer for active path
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id as Sections;
            if (!Object.values(Sections).includes(sectionId)) return;

            if (sectionId !== Sections.PROJECTS) setIsNavVisible(true);
            else setIsNavVisible(false);

            setActivePath(sectionId);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const onScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.scrollY === 0) {
          setIsAtTop(true);
          return;
        }

        setIsAtTop(false);
      }, 10);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // ? Sidebar effect disabler
  useEffect(() => {
    const disableSidebarOnClickOutside = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement;
      if (
        target &&
        !target.closest("aside") &&
        !target.closest("button[data-sidebar-toggle]")
      ) {
        setIsSidebarOpen(false);
      }
    };

    const disableSidebarOnEscape = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    if (!isSidebarOpen) return;

    document.addEventListener("click", disableSidebarOnClickOutside);
    document.addEventListener("keydown", disableSidebarOnEscape);

    return () => {
      document.removeEventListener("click", disableSidebarOnClickOutside);
      document.removeEventListener("keydown", disableSidebarOnEscape);
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const onLinkClick = useCallback((section: Sections) => {
    return () => {
      try {
        if (section === Sections.ABOUT) {
          gsapLib.to(window, {
            duration: 2,
            scrollTo: 0,
            ease: "power2.out",
          });
        } else {
          gsapLib.to(window, {
            duration: 2,
            scrollTo: `#${section}`,
            ease: "power2.out",
          });
        }
      } catch (error) {
        console.error("Scroll animation failed:", error);

        const element =
          section === Sections.ABOUT
            ? document.documentElement
            : document.getElementById(section);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    };
  }, []);

  const navClasses = `
      ${isNavVisible ? "block" : "hidden"}
      p-4 z-10 flex items-center justify-between fixed w-full top-0 right-0 left-0 my-0 
      transition-all duration-500 xl:bg-transparent max-w-screen-xl mx-auto
      ${!isAtTop ? "shadow-md xl:shadow-none bg-gray-100" : ""}
      `.trim();

  return (
    <nav className={navClasses}>
      <h1 className="font-black text-3xl">{portfolioConfig.name}</h1>
      <aside
        className={`p-4 fixed inset-0 bg-light-black text-white h-full w-8/12 transition-transform duration-500 md:hidden ${
          isSidebarOpen ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <h2 className="font-black text-3xl">{portfolioConfig.name}</h2>
        <ul className="p-4 space-y-5">
          {NAVIGATION_LINKS.map((el) => (
            <li
              className="w-full cursor-pointer group transition-all duration-500"
              key={el.label}
            >
              <span onClick={onLinkClick(el.section)}>{el.label}</span>
              {activePath === el.section ? (
                <span className="block max-w-full h-0.5 bg-white"></span>
              ) : (
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              )}
            </li>
          ))}
        </ul>
      </aside>
      <FaAngleRight
        role="button"
        tabIndex={0}
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        aria-expanded={isSidebarOpen}
        data-sidebar-toggle
        onClick={toggleSidebar}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleSidebar();
          }
        }}
        className={`size-10 cursor-pointer transition-transform duration-500 md:hidden ${
          isSidebarOpen ? "rotate-180" : "rotate-0"
        }`}
      />
      <aside className="hidden md:block">
        <ul className="p-4 flex space-x-5">
          {NAVIGATION_LINKS.map((el) => (
            <li
              className="flex flex-col w-full cursor-pointer group transition-all duration-500"
              key={el.label}
            >
              <span onClick={onLinkClick(el.section)}>{el.label}</span>
              {activePath === el.section ? (
                <span className="block max-w-full h-0.5 bg-light-black"></span>
              ) : (
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-light-black"></span>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
}
