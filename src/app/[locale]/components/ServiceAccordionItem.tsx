"use client";

import { useState } from "react";
import { MotionDiv } from "./motion";

interface ServiceAccordionItemProps {
  id: number;
  title: string;
  desc: React.ReactNode;
  index: number;
}

export default function ServiceAccordionItem({
  id,
  title,
  desc,
  index,
}: ServiceAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MotionDiv
      className="border-b border-border last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group w-full py-6 flex items-center gap-6 text-left hover:bg-accent/10 transition-colors duration-200 pl-6 -mx-6 cursor-pointer"
      >
        {/* Number Badge */}
        <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-secondary font-display font-semibold text-lg">
          {String(id).padStart(2, "0")}
        </div>

        {/* Service Title */}
        <h3 className="flex-1 font-medium text-lg leading-snug transition-all duration-300 group-hover:pl-1">
          {title}
        </h3>

        {/* Expand/Collapse Icon */}
        <div className="shrink-0">
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Description - Animated expansion */}
      <MotionDiv
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
          opacity: { duration: 0.2, delay: isOpen ? 0.1 : 0 },
        }}
        className="overflow-hidden"
      >
        <div className="pb-6 px-6 -mx-6">
          <div className="pr-12">
            <div className="text-md text-primary/70 leading-relaxed">{desc}</div>
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
}
