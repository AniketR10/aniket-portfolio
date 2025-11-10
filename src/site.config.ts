import { Education } from "./types/common/education";
import { Experience } from "./types/common/experience";
import { Project } from "./types/common/project";

type PortfolioConfig = {
  name: string;
  email: string;
  contactHook: string;
  linkedInUsername: string;
  githubUsername: string;
  instagramUsername: string;
  smallViewPortImageFileName: string;
  largeViewPortImageFileName: string;
  contactImageFileName: string;
  resumeFileName: string;
  aboutMe: string;
  projects: Project[];
  educationHistory: Education[];
  experiences: Experience[];
};
const githubUsername = "gojo";
export const portfolioConfig: PortfolioConfig = {
  name: "Satoru Gojo",
  email: "gojo@mail.com",
  contactHook: `
         Feel free to reach out — my socials and email are below. Whether you want to talk work, trade banter, or challenge me to a game (spoiler: you’ll lose),
         I’m all ears. I’m always up for teaming up on cool projects, exploring wild ideas, and meeting people who can keep up. Your move.
  `,
  linkedInUsername: "gojo_li",
  githubUsername: githubUsername,
  instagramUsername: "gojo_ig",
  smallViewPortImageFileName: "sample_profile1.webp",
  largeViewPortImageFileName: "sample_profile.webp",
  contactImageFileName: "contact_profile.webp",
  resumeFileName: "resume.pdf",
  aboutMe: `
          Hi, I’m Satoru Gojo — widely considered the strongest, and yes, that applies to coding too. When I’m not busy saving the world from curses, I’m crafting elegant solutions, breaking impossible problems, and writing code so clean it practically writes itself.
          I believe in pushing limits — whether it’s testing the boundaries of cursed techniques or optimizing an algorithm to run ten times faster. My approach blends precision with a little bit of flash, because why settle for functional when you can have flawless?
          If you’re looking for a developer who can handle high-stakes challenges with style, keep calm under pressure, and still have time to crack a joke, you’ve found him.
    `,
  projects: [
    {
      id: "portfolio-website",
      date: "2023-06-15",
      description:
        "A fully responsive personal website developed with Next.js and styled using Tailwind CSS, featuring a portfolio section to highlight my projects, a blog for sharing technical insights and articles, and an integrated contact form to facilitate direct communication.",
      imageAlt: "Screenshot of personal portfolio homepage",
      imageFileName: "project.webp",
      isUnderDevelopment: false,
      projectUrl: "https://johnsdevportfolio.com",
      projectGithubLink: `https://github.com/${githubUsername}/portfolio`,
      projectTags: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Responsive Design",
      ],
      title: "Portfolio",
    },
    {
      id: "jwt-auth-service",
      date: "2024-01-20",
      description:
        "A Node.js microservice providing secure JWT-based authentication, incorporating role-based access control (RBAC) to manage user permissions, and supporting token revocation to prevent unauthorized access after logout or privilege changes. Designed with modular architecture for scalability and easy integration into distributed systems.",
      imageAlt: "Architecture diagram of JWT Auth service",
      imageFileName: "project.webp",
      isUnderDevelopment: true,
      projectGithubLink: `https://github.com/${githubUsername}/jwt-auth-service`,
      projectTags: ["Node.js", "JWT", "Microservices", "Security", "Redis"],
      title: "JWT Auth Service",
    },
    {
      id: "expense-tracker-mobile",
      date: "2025-03-12",
      description:
        "A cross-platform mobile application built to track personal expenses in real time, visualize spending patterns through interactive charts, and set personalized budgeting goals. Designed with an intuitive UI for seamless use on both iOS and Android, featuring offline support, secure local data storage, and export options for financial records.",
      imageAlt: "Mobile app UI showing expense charts",
      imageFileName: "project.webp",
      isUnderDevelopment: false,
      projectUrl: "https://expensetrackerapp.io",
      projectGithubLink: `https://github.com/${githubUsername}/expense-tracker`,
      projectTags: ["React Native", "Firebase", "Charts", "Mobile"],
      title: "Expense Tracker App",
    },
  ],
  educationHistory: [
    {
      id: 1,
      schoolName: "Harvard Extension School",
      date: "2022",
      description:
        "Graduate Certificate in Data Science, covering statistical analysis, machine learning, and data visualization. Completed hands-on projects with large datasets, building predictive models and interactive dashboards to support data-driven decision-making. Gained experience with Python, R, SQL, and cloud-based analytics tools.",
      imageFileName: "harvard.webp",
      imageAlt: "Image of Harvard University",
      imageSource:
        "https://www.harvardmagazine.com/sites/default/files/2025-05/hm_5.29.25_commencement-flag.webp",
    },
    {
      id: 2,
      schoolName: "Stanford University",
      date: "2019 - 2021",
      description:
        "Master of Science in Artificial Intelligence with a concentration in natural language processing and computer vision. Conducted research on multimodal learning, integrating visual and textual data for advanced AI applications. Developed several open-source projects and collaborated with industry partners on applied AI solutions.",
      imageFileName: "stanford.webp",
      imageAlt: "Image of Stanford University",
      imageSource:
        "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/31235/2023/4/3/Campus%20View%20of%20Stanford%20University%20Stanford_Campus-View.webp",
    },
    {
      id: 3,
      schoolName: "Massachusetts Institute of Technology",
      date: "2015 - 2019",
      description:
        "Bachelor of Science in Computer Science and Engineering. Gained a strong foundation in algorithms, operating systems, and distributed computing. Participated in multiple hackathons, internships, and research initiatives in AI and robotics. Graduated with honors while serving as president of the Computer Science Society.",
      imageFileName: "mit.webp",
      imageAlt: "Image of Massachusetts Institute of Technology",
      imageSource:
        "https://www.universityliving.com/blog/wp-content/uploads/2023/06/Banner-Image-Massachusetts-Institute-of-Technology.webp",
    },
  ],
  experiences: [
    {
      company: "TechNova Inc.",
      title: "Senior Software Engineer",
      dateRange: "Jan 2020 – Present",
      contributions: [
        "Led the end-to-end migration of a 10-year-old monolithic legacy system into a modern, cloud-native microservices architecture, reducing operational costs by 35% and enabling faster feature deployment.",
        "Mentored and coached a team of 5 junior developers through pair-programming sessions, code reviews, and weekly learning workshops, resulting in a 25% reduction in onboarding time.",
        "Designed and implemented CI/CD pipelines using GitHub Actions and Kubernetes, cutting average deployment time from 2 hours to under 30 minutes while improving release reliability.",
      ],
    },
    {
      company: "DataSphere Solutions",
      title: "Full Stack Developer",
      dateRange: "Aug 2017 – Dec 2019",
      contributions: [
        "Developed a real-time customer analytics dashboard using React, Node.js, and WebSockets, enabling business teams to track KPIs with minute-level accuracy.",
        "Optimized PostgreSQL queries and introduced caching mechanisms, improving database response times by 60% and reducing server load by 40%.",
        "Collaborated closely with UX designers to revamp the dashboard interface, conducting A/B testing that increased user engagement by 18%.",
      ],
    },
    {
      company: "BrightApps",
      title: "Frontend Developer",
      dateRange: "May 2015 – Jul 2017",
      contributions: [
        "Built and maintained responsive UI components in React and Redux, ensuring cross-browser compatibility and achieving a 98% Lighthouse performance score.",
        "Integrated REST APIs with robust error handling and retry logic, significantly improving data reliability in real-time dashboards.",
        "Partnered with the QA team to implement automated UI tests using Cypress, reducing regression bugs in production by over 50%.",
      ],
    },
  ],
};
