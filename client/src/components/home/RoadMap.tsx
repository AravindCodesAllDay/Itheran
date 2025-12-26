import { useState } from "react";

export default function RoadMap() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  interface WorkStep {
    step: string;
    title: string;
    desc: string;
  }

  const workSteps: WorkStep[] = [
    {
      step: "01",
      title: "Skill Mapping",
      desc: "We assess and recommend the best learning paths.",
    },
    {
      step: "02",
      title: "Interactive Training",
      desc: "Practice with real-time feedback from AI avatars.",
    },
    {
      step: "03",
      title: "Analyse",
      desc: "Get every bit of data, to evaluate your skills through datasets.",
    },
    {
      step: "04",
      title: "Track & Improve",
      desc: "Monitor your progress and sharpen your expertise.",
    },
  ];

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <section id="roadmap" className="section-container bg-primary">
      {/* HEADER */}
      <div className="relative z-10 flex flex-col items-center text-center gap-4 mb-20 w-full max-w-6xl mx-auto">
        <h2 className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-xs font-bold uppercase tracking-[0.2em]">
          The Process
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-light">
          How We <span className="text-secondary">Work</span>
        </h3>
        <p className="text-muted max-w-2xl text-lg leading-relaxed">
          A step-by-step journey from skill assessment to professional mastery,
          powered by AI simulations.
        </p>
      </div>

      <div className="space-y-4 max-w-5xl mx-auto">
        {workSteps.map((item, index) => {
          const isOpen = openStep === index;

          return (
            <div
              key={index}
              onClick={() => toggleStep(index)}
              className={`
                  relative overflow-hidden rounded-4xl p-8 cursor-pointer 
                  transition-all duration-500 ease-in-out border
                  ${
                    isOpen
                      ? "border-secondary/50 bg-secondary/5 shadow-glow"
                      : "border-white/10 glass hover:border-white/20"
                  }
                `}
            >
              {/* ✅ CONTENT */}
              <div className="relative z-10 text-light">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-4xl font-black tracking-tight transition-colors duration-300 ${
                        isOpen ? "text-secondary" : "text-white/20"
                      }`}
                    >
                      {item.step}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* TOGGLE BUTTON */}
                  <div
                    className={`
                        w-10 h-10 rounded-full flex items-center justify-center 
                        transition-all duration-300 border
                        ${
                          isOpen
                            ? "bg-secondary text-primary border-secondary"
                            : "bg-white/5 text-light border-white/10"
                        }
                      `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transition-transform duration-500 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={isOpen ? "M20 12H4" : "M12 4v16m8-8H4"}
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
                    <p className="pl-16 max-w-2xl text-muted text-lg leading-relaxed">
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
