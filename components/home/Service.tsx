"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import type { FC } from "react";
import { useRef, useState, useMemo } from "react";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

import interview from "../../assets//interview.json";

import resume from "../../assets/resume.json";
import skills from "../../assets/skills.json";
import { SmoothUnderline } from "../FunElements";

// --- Types ---
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  illustration: object;
}

// --- ServiceCard Component ---
interface ServiceCardProps extends ServiceItem {
  style?: React.CSSProperties;
  className?: string;
  iconWrapperClass?: string;
  arrowClass?: string;
  arrowIconClass?: string;
  titleClass?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  id,
  title,
  description,
  illustration,
  className,
  iconWrapperClass,
  arrowClass,
  arrowIconClass,
  titleClass,
}) => {
  const [isPaused, setIsPaused] = useState(true);

  const defaultOptions = useMemo(
    () => ({
      loop: true,
      autoplay: false,
      animationData: illustration,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }),
    [illustration],
  );

  return (
    <Link
      href={`/features/${id}`}
      onMouseEnter={() => setIsPaused(false)}
      onMouseLeave={() => setIsPaused(true)}
      className={
        className ||
        "group bg-surface relative rounded-[2.5rem] p-8 flex flex-col gap-6 border-2 border-border shadow-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 overflow-hidden cursor-pointer"
      }
    >
      <div className="flex justify-between items-center">
        <div
          className={
            iconWrapperClass ||
            "size-20 rounded-3xl bg-surface-highlight flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300"
          }
        >
          {/* Lottie Animation Container */}
          <div className="w-full h-full pointer-events-none">
            <Lottie
              options={defaultOptions}
              isPaused={isPaused}
              height="100%"
              width="100%"
            />
          </div>
        </div>

        {/* Arrow Icon */}
        <div
          className={
            arrowClass ||
            "bg-secondary/10 dark:bg-secondary/20 size-12 rounded-full flex items-center justify-center group-hover:bg-secondary transition-colors duration-300"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={
              arrowIconClass ||
              "size-6 text-secondary group-hover:text-white transition-colors"
            }
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="space-y-3">
        <h4
          className={
            titleClass ||
            "text-2xl font-display font-bold text-light group-hover:text-secondary transition-colors"
          }
        >
          {title}
        </h4>
        <p className="text-muted text-base leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </Link>
  );
};

// --- Main Component ---
export default function Service() {
  const containerRef = useRef<HTMLDivElement>(null);

  const services: (ServiceItem & {
    theme: string;
  })[] = [
    {
      id: "ai-interview",
      title: "AI Interview",
      description:
        "Emotion-aware AI that analyzes facial cues and voice data to provide real-time feedback.",
      illustration: interview,
      theme: "theme-2",
    },
    {
      id: "resume-gen",
      title: "Resume Generator",
      description:
        "AI-powered resume crafting that optimizes for ATS and highlights your impact.",
      illustration: resume,
      theme: "theme-1",
    },
    {
      id: "skill-training",
      title: "Skill Training",
      description:
        "Personalized roadmaps and curated resources to help you bridge the tech gap.",
      illustration: skills,
      theme: "theme-3",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="services"
      className="section-container bg-surface overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center text-center gap-4 mb-16 w-full max-w-6xl mx-auto">
        <div className="inline-block px-4 py-2 rounded-2xl bg-theme-2 text-white text-xs font-black uppercase tracking-widest transform rotate-2">
          Our Expertise
        </div>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-light">
          Immersive Learning <br />
          <span className="relative inline-block text-theme-1">
            Solutions
            <SmoothUnderline className="text-theme-3 w-full" />
          </span>
        </h3>
        <p className="text-muted max-w-2xl text-lg leading-relaxed font-medium mt-4">
          We combine cutting-edge AI with pedagogical excellence to provide a
          suite of tools designed for the modern professional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative z-10">
        {services.map((s, i) => {
          const serviceThemeMap: Record<string, any> = {
            "theme-1": {
              hoverBorder: "hover:border-theme-1",
              hoverText:
                "group-hover:text-theme-1 dark:group-hover:text-theme-1",
              iconBg:
                "group-hover:bg-theme-1/10 dark:group-hover:bg-theme-1/20",
              iconColor: "text-theme-1",
            },
            "theme-2": {
              hoverBorder: "hover:border-theme-2",
              hoverText:
                "group-hover:text-theme-2 dark:group-hover:text-theme-2",
              iconBg:
                "group-hover:bg-theme-2/10 dark:group-hover:bg-theme-2/20",
              iconColor: "text-theme-2",
            },
            "theme-3": {
              hoverBorder: "hover:border-theme-3",
              hoverText:
                "group-hover:text-theme-3 dark:group-hover:text-theme-3",
              iconBg:
                "group-hover:bg-theme-3/10 dark:group-hover:bg-theme-3/20",
              iconColor: "text-theme-3",
            },
          };
          const themeStyles = serviceThemeMap[s.theme || "theme-2"];

          return (
            <ServiceCard
              key={i}
              {...s}
              className={`group bg-white dark:bg-black/40 relative rounded-[2.5rem] p-8 flex flex-col gap-6 border-2 border-primary/5 dark:border-white/5 shadow-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] ${themeStyles.hoverBorder} transition-all duration-300 overflow-hidden cursor-pointer`}
              iconWrapperClass={`size-20 rounded-3xl bg-surface dark:bg-black/20 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300 ${themeStyles.iconBg}`}
              arrowClass={`bg-secondary/10 dark:bg-secondary/20 size-12 rounded-full flex items-center justify-center ${themeStyles.iconBg} transition-colors duration-300`}
              arrowIconClass={`size-6 text-secondary group-hover:text-white transition-colors ${themeStyles.iconColor}`}
              titleClass={`text-2xl font-display font-bold text-light ${themeStyles.hoverText} transition-colors`}
            />
          );
        })}
      </div>
    </section>
  );
}
