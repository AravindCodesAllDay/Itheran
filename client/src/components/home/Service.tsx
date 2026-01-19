import { useRef, useState } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { Squiggle } from "../FunElements";

import resume from "../../assets/resume.json";
import skills from "../../assets/skills.json";
import interview from "../../assets//interview.json";

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
}

const ServiceCard: FC<ServiceCardProps> = ({
  id,
  title,
  description,
  illustration,
}) => {
  const [isPaused, setIsPaused] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: illustration,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Link
      to={`/features/${id}`}
      onMouseEnter={() => setIsPaused(false)}
      onMouseLeave={() => setIsPaused(true)}
      className="group bg-white dark:bg-white/5 relative rounded-[2.5rem] p-8 flex flex-col gap-6 border-2 border-primary/5 dark:border-white/5 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:border-brand-secondary transition-all duration-300 overflow-hidden cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <div className="size-20 rounded-3xl bg-surface dark:bg-white/10 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
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
        <div className="bg-brand-secondary/10 dark:bg-brand-secondary/20 size-12 rounded-full flex items-center justify-center group-hover:bg-brand-secondary transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6 text-brand-secondary group-hover:text-white transition-colors"
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
        <h4 className="text-2xl font-display font-bold text-light group-hover:text-brand-secondary transition-colors">
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

  const services: ServiceItem[] = [
    {
      id: "ai-interview",
      title: "AI Interview",
      description:
        "Emotion-aware AI that analyzes facial cues and voice data to provide real-time feedback.",
      illustration: interview,
    },
    {
      id: "resume-gen",
      title: "Resume Generator",
      description:
        "AI-powered resume crafting that optimizes for ATS and highlights your impact.",
      illustration: resume,
    },
    {
      id: "skill-training",
      title: "Skill Training",
      description:
        "Personalized roadmaps and curated resources to help you bridge the tech gap.",
      illustration: skills,
    },
  ];

  return (
    <section
      ref={containerRef}
      id="services"
      className="section-container bg-surface overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center text-center gap-4 mb-16 w-full max-w-6xl mx-auto">
        <div className="inline-block px-4 py-2 rounded-2xl bg-brand-accent text-white text-xs font-black uppercase tracking-widest transform rotate-2">
          Our Expertise
        </div>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-light">
          Immersive Learning <br />
          <span className="relative inline-block text-brand-secondary">
            Solutions
            <Squiggle className="text-brand-accent w-full -bottom-2 md:-bottom-4 left-0 h-4 md:h-6" />
          </span>
        </h3>
        <p className="text-muted max-w-2xl text-lg leading-relaxed font-medium mt-4">
          We combine cutting-edge AI with pedagogical excellence to provide a
          suite of tools designed for the modern professional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative z-10">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[300px] md:size-[600px] bg-brand-secondary/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
