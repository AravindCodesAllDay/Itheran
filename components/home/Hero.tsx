"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useMemo } from "react";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

import robot from "../../assets/robot2.json";
import {
  ArrowDoodle,
  CircleDoodle,
  SmoothUnderline,
  StarBurst,
} from "../FunElements";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const defaultOptions = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: robot,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }),
    [],
  );

  const pitches = [
    {
      color: "theme-3",
      text: "3D Avatar Interaction",
    },
    {
      color: "theme-2",
      text: "No Credit Card Needed",
    },
    {
      color: "theme-1",
      text: "AI-Driven Feedback",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex justify-center items-center min-h-dvh w-full overflow-hidden bg-primary text-light"
    >
      {/* Fun Background Blobs - Hero Colors */}
      <div
        className="absolute top-0 -left-20 size-60 mix-blend-multiply filter blur-3xl opacity-25 dark:mix-blend-normal"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="w-full h-full bg-theme-2 rounded-full animate-blob" />
      </div>
      <div
        className="absolute top-20 -right-24 size-96 mix-blend-multiply filter blur-3xl opacity-25 dark:mix-blend-normal"
        style={{ transform: `translateY(${scrollY * 0.8}px)` }}
      >
        <div className="w-full h-full bg-theme-1 rounded-full animate-blob animation-delay-2000" />
      </div>
      <div
        className="absolute -bottom-32 left-24 size-80 mix-blend-multiply filter blur-3xl opacity-25 dark:mix-blend-normal"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <div className="w-full h-full bg-theme-3 rounded-full animate-blob animation-delay-4000" />
      </div>
      <div
        className="absolute top-1/2 right-1/4 size-72 mix-blend-multiply filter blur-3xl opacity-25 dark:mix-blend-normal"
        style={{ transform: `translateY(${scrollY * 0.6}px)` }}
      >
        <div className="w-full h-full bg-theme-2 rounded-full animate-blob animation-delay-2000" />
      </div>
      <CircleDoodle className="text-theme-3 top-20 left-1/4 w-32 h-32 opacity-60" />

      {/* Main Content */}
      <div
        className="relative z-30 text-center space-y-8 max-w-5xl px-6 mt-12"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        {/* Badge */}
        <div className="inline-block px-6 py-2 rounded-full border-2 border-theme-1 bg-surface-highlight text-theme-1 text-sm font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_var(--color-theme-1)] hover:translate-y-1 hover:shadow-none transition-all cursor-default animate-bounce relative z-10">
          🚀 Next Gen Skill Development
        </div>

        {/* Heading */}
        <div className="relative">
          <StarBurst className="text-yellow-400 -top-8 -right-8 w-16 h-16 animate-spin-slow" />
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display leading-tight md:leading-none text-light drop-shadow-sm">
            Avatar-Based <br />
            <span className="relative inline-block text-theme-2 transform -rotate-2 hover:rotate-3 transition-transform duration-300">
              Skill Training
              <SmoothUnderline className="text-theme-1 w-full" />
            </span>
          </h1>
        </div>

        <p className="text-lg md:text-3xl font-medium text-light max-w-3xl mx-auto leading-relaxed transform rotate-1">
          Simulate interviews, master soft skills, and grow with{" "}
          <span className="font-bold text-theme-2 px-2 py-1 bg-theme-2/10 rounded-lg">
            AI feedback
          </span>{" "}
          in a 3D world!
        </p>

        {/* Feature Cards Loop */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-8 relative">
          <ArrowDoodle className="text-hero-secondary h-24 w-24 absolute -left-12 -top-10 transform -rotate-45 hidden lg:block" />

          {pitches.map((item, i) => {
            const themeMap: Record<string, string> = {
              "theme-1":
                "bg-[rgb(var(--theme-1-rgb)/0.2)] text-theme-1 border-theme-1",
              "theme-2":
                "bg-[rgb(var(--theme-2-rgb)/0.2)] text-theme-2 border-theme-2",
              "theme-3":
                "bg-[rgb(var(--theme-3-rgb)/0.2)] text-theme-3 border-theme-3",
            };

            return (
              <div
                key={i}
                className={`px-4 py-2 md:px-8 md:py-4 rounded-3xl font-black text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-0.5 transition-all duration-200 cursor-pointer border-2 hover:scale-105 ${themeMap[item.color]}`}
              >
                {item.text}
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-6 relative">
          {/* <button className="px-10 py-5 bg-brand-secondary text-white font-black text-xl rounded-2xl shadow-[0px_10px_0px_0px_#005f63] hover:shadow-[0px_5px_0px_0px_#005f63] hover:translate-y-[5px] active:shadow-none active:translate-y-[10px] transition-all">
            Get Started Now
          </button> */}
        </div>
      </div>

      {/* Lottie Robot */}
      <div
        className="absolute h-3/5 md:h-[90%] md:top-10 z-0 pointer-events-none opacity-80 dark:opacity-40 lg:opacity-60 dark:lg:opacity-40"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <Lottie options={defaultOptions} />
      </div>
    </section>
  );
}
