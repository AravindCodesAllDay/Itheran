import { useRef, useEffect, useState } from "react";
import type { FC } from "react";

import resume from "/services/resume.gif";
import skills from "/services/skills.gif";
import interview from "/services/interview.gif";
import arrow from "/services/arrow.gif";

// --- Types ---
interface ServiceItem {
  title: string;
  description: string;
  bg: string;
  text: string;
  titleBg: string;
  illustration: string;
}

interface GifControllerProps {
  src: string;
  alt: string;
  className?: string;
}

// --- GifController Component ---
const GifController: FC<GifControllerProps> = ({
  src,
  alt,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = imgRef.current;
    const canvas = canvasRef.current;
    if (!image || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawFrame = () => {
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      ctx.drawImage(image, 0, 0);
      setIsLoaded(true);
    };

    if (image.complete) drawFrame();
    else image.onload = drawFrame;

    return () => {
      image.onload = null;
    };
  }, [src]);

  return (
    <div className={`relative shrink-0 overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-200 opacity-0 group-hover:opacity-100"
      />
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-contain pointer-events-none transition-opacity duration-200 ${
          isLoaded ? "opacity-100 group-hover:opacity-0" : "opacity-0"
        }`}
      />
    </div>
  );
};

// --- ServiceCard Component ---
interface ServiceCardProps extends ServiceItem {
  style?: React.CSSProperties;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  bg,
  text,
  titleBg,
  illustration,
}) => {
  return (
    <div
      className={`group relative rounded-3xl p-8 md:p-10 border-2 border-PRIMARY flex flex-col justify-between shadow-[4px_4px_0px_0px_#191A23] hover:-translate-y-1 hover:transition-transform hover:duration-300 hover:ease-out ${bg} ${text} will-change-transform`}
    >
      <div className="flex justify-between items-start gap-6">
        <div className="flex flex-col gap-6">
          <span
            className={`px-3 py-1 text-xl font-medium rounded-md w-fit ${titleBg} text-PRIMARY`}
          >
            {title}
          </span>

          <div className="bg-white rounded-full flex items-center gap-3 px-4 py-2 w-fit cursor-pointer overflow-hidden">
            <GifController
              src={arrow}
              alt="learn more"
              className="size-8 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110"
            />
            <span className="text-lg text-PRIMARY font-medium LIGHTER-GRAYspace-nowrap">
              Learn more
            </span>
          </div>
        </div>

        <GifController
          src={illustration}
          alt={title}
          className="size-24 md:size-28 rounded-full"
        />
      </div>

      <p className="mt-8 text-sm md:text-base opacity-80">{description}</p>
    </div>
  );
};

// --- Main Component ---
export default function Service() {
  const containerRef = useRef<HTMLDivElement>(null);

  const services: ServiceItem[] = [
    {
      title: "AI Interview",
      description:
        "Improve your online visibility with targeted SEO strategies.",
      bg: "bg-LIGHT-GRAY",
      text: "text-PRIMARY",
      titleBg: "bg-SECONDARY",
      illustration: interview,
    },
    {
      title: "Resume Generator",
      description: "Boost your results quickly with optimized PPC campaigns.",
      bg: "bg-SECONDARY",
      text: "text-PRIMARY",
      titleBg: "bg-LIGHT-GRAY",
      illustration: resume,
    },
    {
      title: "Skill Training",
      description: "Grow your audience with creative social media strategies.",
      bg: "bg-PRIMARY",
      text: "text-LIGHT-GRAY",
      titleBg: "bg-LIGHT-GRAY",
      illustration: skills,
    },
  ];

  return (
    <section
      ref={containerRef}
      id="services"
      className="bg-LIGHTER-GRAY px-6 lg:px-32 py-20"
    >
      <div className="flex flex-col items-start gap-3 mb-10 w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold rounded-xl px-5 py-2 bg-SECONDARY text-PRIMARY">
          Services
        </h2>
        <p className="text-base md:text-lg max-w-3xl text-PRIMARY/80">
          We offer a range of services to help students grow and succeed.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 w-full relative perspective-1000">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}
