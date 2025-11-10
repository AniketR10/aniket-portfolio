"use client";

import { Brand } from "@/types/common/brand";

export default function BrandTile({ title, hexColor, icon }: Brand) {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLElement).style.color = hexColor;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLElement).style.color = "";
  };

  return (
    <div className="brand-container">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {icon}
      </div>
      <span className="brand-title">{title}</span>
    </div>
  );
}
