import { useState } from "react";
import { StarBurst } from "../FunElements";

export default function RoadMap() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  interface WorkStep {
    step: string;
    title: string;
    desc: string;
    color: string;
  }

  const workSteps: WorkStep[] = [
    {
      step: "01",
      title: "Skill Mapping",
      desc: "We assess and recommend the best learning paths tailored just for you.",
      color:
        "bg-roadmap-primary/5 border-roadmap-primary/20 text-roadmap-primary dark:bg-roadmap-primary/10 dark:border-roadmap-primary/30 dark:text-roadmap-primary",
    },
    {
      step: "02",
      title: "Interactive Training",
      desc: "Practice with real-time feedback from AI avatars in a risk-free environment.",
      color:
        "bg-roadmap-secondary/5 border-roadmap-secondary/20 text-roadmap-secondary dark:bg-roadmap-secondary/10 dark:border-roadmap-secondary/30 dark:text-roadmap-secondary",
    },
    {
      step: "03",
      title: "Analyse",
      desc: "Get Granular data on every interaction to evaluate your soft skills.",
      color:
        "bg-roadmap-accent/5 border-roadmap-accent/20 text-roadmap-accent dark:bg-roadmap-accent/10 dark:border-roadmap-accent/30 dark:text-roadmap-accent",
    },
    {
      step: "04",
      title: "Track & Improve",
      desc: "Monitor your progress over time and sharpen your professional expertise.",
      color:
        "bg-roadmap-info/5 border-roadmap-info/20 text-roadmap-info dark:bg-roadmap-info/10 dark:border-roadmap-info/30 dark:text-roadmap-info",
    },
  ];

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <section id="roadmap" className="section-container bg-surface">
      {/* HEADER */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 mb-16 w-full max-w-6xl mx-auto">
        <div className="inline-block px-4 py-2 rounded-2xl bg-roadmap-primary text-white text-xs font-black uppercase tracking-widest transform -rotate-1">
          The Process
        </div>
        <div className="relative">
          <StarBurst className="text-yellow-400 absolute -top-10 -right-10 w-16 h-16 animate-spin-slow" />
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-light z-10 relative">
            How We <span className="text-roadmap-secondary">Work</span>
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

          return (
            <div
              key={index}
              onClick={() => toggleStep(index)}
              className={`
                  relative overflow-hidden rounded-[2.5rem] p-6 md:p-8 cursor-pointer 
                  transition-all duration-500 ease-in-out border-4
                  ${
                    isOpen
                      ? `${item.color} shadow-none translate-y-1`
                      : `bg-white dark:bg-white/5 border-transparent shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-current`
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
