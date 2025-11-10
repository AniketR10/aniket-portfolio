export type Project = {
  id: string;
  date: string;
  /** Make it as concise as possible, bc making it long does not go well with the horizontal scroll */
  description: string;
  imageAlt: string;
  /** Filename of the project's image if you store it in the codebase */
  imageFileName?: string;
  /** Image link if it is stored outside the codebase */
  imageLink?: string;
  isUnderDevelopment: boolean;
  projectUrl?: string;
  projectGithubLink: string;
  projectTags: string[];
  title: string;
};
