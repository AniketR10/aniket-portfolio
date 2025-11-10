"use client";

export default function Tag({ content }: { content: string }) {
  return (
    <div className="uppercase text-white font-black text-xs w-fit py-1 px-4 rounded-full bg-gradient-to-r from-black from-30% to-light-black to-70% hover-translate-up">
      {content}
    </div>
  );
}
