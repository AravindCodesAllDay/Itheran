import { useState } from "react";
import scenary from "/scenary.jpg";

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
    <section id="roadmap" className="px-6 lg:px-32 py-20">
      {/* HEADER */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold rounded-xl px-4 py-2 bg-[#B9FF66] w-fit text-DARK-PRIMARY">
          Our Working Process
        </h2>
        <p className="mt-3 text-base md:text-lg text-[#191A23]/80">
          Step-by-Step Guide to Achieving Your Goals
        </p>
      </div>

      <div className="space-y-6">
        {workSteps.map((item, index) => {
          const isOpen = openStep === index;

          const positionPercentage = (index / (workSteps.length - 1)) * 100;

          const backgroundStyle = {
            backgroundImage: `url(${scenary})`,
            backgroundPosition: `center ${positionPercentage}%`,
            backgroundSize: "cover",
          };

          return (
            <div
              key={index}
              onClick={() => toggleStep(index)}
              className={`
                  relative overflow-hidden rounded-3xl p-6 cursor-pointer 
                  border-2 transition-all duration-500 ease-in-out
                  shadow-[4px_4px_0px_0px_#191A23]
                  ${
                    isOpen
                      ? "border-GREEN"
                      : "border-LIGHT-GRAY hover:-translate-y-1 hover:transition-transform hover:duration-300 hover:ease-out"
                  }
                `}
            >
              <div
                className={`
                    absolute inset-0 transition-opacity duration-700
                    ${isOpen ? "opacity-100" : "opacity-0"}
                  `}
                style={backgroundStyle}
              />

              {/* ✅ DARK OVERLAY (Readability) */}
              <div
                className={`
                    absolute inset-0 transition-opacity duration-500
                    ${isOpen ? "bg-black/40 opacity-100" : "opacity-0"}
                  `}
              />

              {/* ✅ CONTENT */}
              <div
                className={`
                    relative z-10 transition-colors duration-300
                    ${isOpen ? "text-white" : "text-DARK-PRIMARY"}
                  `}
              >
                <div className="flex items-start justify-between">
                  <div className="flex flex-col sm:flex-row items-baseline gap-4">
                    <span className="text-4xl font-light tracking-tight">
                      {item.step}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  {/* TOGGLE BUTTON */}
                  <button
                    className={`
                        w-8 h-8 rounded-full flex items-center justify-center 
                        border-2 transition-all duration-300
                        ${
                          isOpen
                            ? "bg-GREEN text-DARK-PRIMARY border-LIGHT-GRAY"
                            : "bg-DARK-PRIMARY text-GREEN border-DARK-PRIMARY"
                        }
                      `}
                  >
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* DROPDOWN TEXT */}
                <div
                  className={`
                      grid transition-all duration-500 ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-4"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                >
                  <div className="overflow-hidden">
                    <p className="pl-14 max-w-2xl text-base">{item.desc}</p>
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
