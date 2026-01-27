"use client";

import { useState } from "react";
import {
  ArrowDoodle,
  BlurShape,
  CircleDoodle,
  StarBurst,
} from "../FunElements";

export default function RoadMap() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  interface WorkStep {
    step: string;
    title: string;
    desc: string;
    theme: string;
  }

  const workSteps: WorkStep[] = [
    {
      step: "01",
      title: "Skill Mapping",
      desc: "We assess and recommend the best learning paths tailored just for you.",
      theme: "theme-2",
    },
    {
      step: "02",
      title: "Interactive Training",
      desc: "Practice with real-time feedback from AI avatars in a risk-free environment.",
      theme: "theme-1",
    },
    {
      step: "03",
      title: "Analyse",
      desc: "Get Granular data on every interaction to evaluate your soft skills.",
      theme: "theme-3",
    },
    {
      step: "04",
      title: "Track & Improve",
      desc: "Monitor your progress over time and sharpen your professional expertise.",
      theme: "theme-4",
    },
  ];

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <section
      id="roadmap"
      className="section-container bg-surface lg:rounded-l-full relative overflow-hidden"
    >
      <ArrowDoodle className="top-20 right-0 md:right-[20%] text-theme-2 rotate-180 opacity-20" />

      {/* HEADER */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 mb-16 w-full max-w-6xl mx-auto">
        <div className="inline-block px-4 py-2 rounded-2xl bg-theme-2 text-white text-xs font-black uppercase tracking-widest transform -rotate-1">
          The Process
        </div>
        <div className="relative">
          <StarBurst className="text-yellow-400 absolute -top-10 -right-10 w-16 h-16 animate-spin-slow" />
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-light z-10 relative">
            How We <span className="text-theme-1">Work</span>
          </h3>
        </div>
        <p className="text-muted max-w-2xl text-lg leading-relaxed font-medium">
          A step-by-step journey from skill assessment to professional mastery,
          powered by bouncy AI simulations!
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {workSteps.map((item, index) => {
          const isOpen = openStep === index;
          const roadMapThemeMap: Record<string, any> = {
            "theme-1": {
              active:
                "bg-theme-1/5 border-theme-1/20 text-theme-1 dark:bg-theme-1/10 dark:border-theme-1/30 dark:text-theme-1",
              border: "hover:border-theme-1",
            },
            "theme-2": {
              active:
                "bg-theme-2/5 border-theme-2/20 text-theme-2 dark:bg-theme-2/10 dark:border-theme-2/30 dark:text-theme-2",
              border: "hover:border-theme-2",
            },
            "theme-3": {
              active:
                "bg-theme-3/5 border-theme-3/20 text-theme-3 dark:bg-theme-3/10 dark:border-theme-3/30 dark:text-theme-3",
              border: "hover:border-theme-3",
            },
            "theme-4": {
              active:
                "bg-theme-4/5 border-theme-4/20 text-theme-4 dark:bg-theme-4/10 dark:border-theme-4/30 dark:text-theme-4",
              border: "hover:border-theme-4",
            },
          };

          const themeStyles = roadMapThemeMap[item.theme || "theme-2"];

          return (
            <div
              key={index}
              onClick={() => toggleStep(index)}
              className={`
                  relative overflow-hidden rounded-[2.5rem] p-6 md:p-8 cursor-pointer 
                  transition-all duration-500 ease-in-out border-4
                  ${
                    isOpen
                      ? `${themeStyles.active} shadow-none translate-y-1`
                      : `bg-white dark:bg-black/40 border-transparent shadow-sm hover:-translate-y-1 hover:shadow-md ${themeStyles.border}`
                  }
                `}
              style={{
                borderColor: isOpen ? "" : undefined,
                color: isOpen ? "" : undefined,
              }}
            >
              {/* ✅ CONTENT */}
              <div className="relative z-10 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-5xl font-display font-black tracking-tight transition-colors duration-300 ${
                        isOpen
                          ? "opacity-100"
                          : "text-gray-200 dark:text-white/10"
                      }`}
                    >
                      {item.step}
                    </span>
                    <h3
                      className={`text-xl md:text-2xl font-bold tracking-tight ${
                        isOpen ? "text-inherit" : "text-light"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* TOGGLE BUTTON */}
                  <div
                    className={`
                        size-12 rounded-full flex items-center justify-center 
                        transition-all duration-300 border-2
                        ${
                          isOpen
                            ? "bg-white/20 border-white/20 -rotate-90"
                            : "bg-surface dark:bg-white/5 border-transparent"
                        }
                      `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 transition-transform duration-500 ${
                        isOpen ? "" : "text-light"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={isOpen ? "M5 12h14" : "M12 5v14m-7-7h14"}
                      />
                    </svg>
                  </div>
                </div>

                {/* DROPDOWN TEXT */}
                <div
                  className={`
                      grid transition-all duration-500 ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-6"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                >
                  <div className="overflow-hidden">
                    <p className="pl-0 md:pl-20 mt-4 md:mt-0 max-w-2xl text-base md:text-lg leading-relaxed font-medium opacity-90">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
