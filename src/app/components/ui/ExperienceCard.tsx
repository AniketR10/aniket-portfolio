import { Experience } from "@/types/common/experience";

export default function ExperienceCard({
  company,
  title,
  dateRange,
  contributions,
}: Experience) {
  return (
    <div className="exp h-full relative">
      <span className="line absolute h-full -left-3 w-2 xl:-left-10 xl:w-3 bg-black"></span>
      <div>
        <h5 className="text-4xl font-black">{company}</h5>
        <span className="font-semibold">{title}</span>
        <hr className="h-1 border-none bg-black" />
        <span className="">{dateRange}</span>
        <ul className="experience-list">
          {contributions.map((contrib) => (
            <li key={contrib} className="text-justify">
              {contrib}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
