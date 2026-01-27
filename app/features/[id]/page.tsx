"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  ArrowDoodle,
  BlurShape,
  CircleDoodle,
  SmoothUnderline,
  StarBurst,
} from "@/components/FunElements";

import Sidebar from "@/components/Sidebar";
import { sections } from "../features";

export default function Features() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const activeSection = id;
  const current = sections[activeSection as keyof typeof sections];

  useEffect(() => {
    if (!current) {
      const firstFeature = Object.keys(sections)[0];
      router.push(`/features/${firstFeature}`);
    }
  }, [current, router]);

  if (!current) {
    return null;
  }

  return (
    <main className="pt-28 min-h-screen bg-surface transition-colors duration-300 relative overflow-hidden rounded-b-4xl">
      {/* Background Decoration */}
      <BlurShape
        className="-top-24 -right-24"
        size="xl"
        color={current.colorTheme.replace("theme-", "")}
      />
      <BlurShape className="bottom-0 -left-24" size="lg" color="accent" />

      {/* Doodles */}
      <CircleDoodle className="top-40 right-[15%] text-accent opacity-40" />
      {id === "ai-interview" && (
        <ArrowDoodle className="bottom-20 left-[20%] text-secondary -rotate-45 opacity-20" />
      )}
      {id === "resume-gen" && (
        <StarBurst className="top-60 left-[10%] text-primary animate-pulse opacity-20" />
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 relative z-10">
        <Sidebar
          activeId={activeSection}
          themeColor={current.colorTheme}
          onSelect={(id) => router.push(`/features/${id}`)}
        />

        <div className="flex-1 pb-24">
          <div className="reveal">
            {/* Header */}
            <div className="relative mb-8">
              <StarBurst
                className={`text-accent absolute -top-8 -left-8 w-12 h-12 animate-spin-slow opacity-80`}
              />
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-light mb-4 drop-shadow-sm">
                {current.title}
              </h1>
              {(() => {
                const themeTextMap: Record<string, string> = {
                  "theme-1": "text-theme-1",
                  "theme-2": "text-theme-2",
                  "theme-3": "text-theme-3",
                  "theme-4": "text-theme-4",
                };
                return (
                  <p
                    className={`${themeTextMap[current.colorTheme]} text-2xl font-display font-medium relative inline-block transition-colors duration-300`}
                  >
                    {current.tagline}
                    <SmoothUnderline className="text-accent w-full" />
                  </p>
                );
              })()}
            </div>

            {/* Main Description Card */}
            <div className="p-6 md:p-8 rounded-[2.5rem] mb-12 border-2 border-muted/20 shadow-muted/40 shadow-[8px_8px_0px_0px]">
              <p className="text-muted dark:text-light/90 text-lg leading-relaxed font-medium">
                {current.description}
              </p>
            </div>

            {/* Feature Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {current.points?.map((point, i) => {
                const cardThemeMap: Record<string, string> = {
                  "theme-1":
                    "hover:border-theme-1 hover:shadow-[4px_4px_0px_0px_rgb(var(--theme-1-rgb)/0.4)] group-hover:text-theme-1",
                  "theme-2":
                    "hover:border-theme-2 hover:shadow-[4px_4px_0px_0px_rgb(var(--theme-2-rgb)/0.4)] group-hover:text-theme-2",
                  "theme-3":
                    "hover:border-theme-3 hover:shadow-[4px_4px_0px_0px_rgb(var(--theme-3-rgb)/0.4)] group-hover:text-theme-3",
                  "theme-4":
                    "hover:border-theme-4 hover:shadow-[4px_4px_0px_0px_rgb(var(--theme-4-rgb)/0.4)] group-hover:text-theme-4",
                };
                // Splitting text color for the h3 vs container styles
                const themeClass = cardThemeMap[current.colorTheme] || "";
                const hoverBorderShadow = themeClass
                  .split(" ")
                  .filter((c) => c.startsWith("hover:"))
                  .join(" ");
                const groupHoverText = themeClass
                  .split(" ")
                  .filter((c) => c.startsWith("group-hover:"))
                  .join(" ");

                return (
                  <div
                    key={i}
                    className={`p-6 md:p-8 rounded-4xl border-2 border-muted/20 transition-all duration-300 group cursor-default ${hoverBorderShadow} hover:translate-x-1 hover:-translate-y-1`}
                  >
                    <h3
                      className={`text-xl font-display font-bold text-light mb-3 transition-colors ${groupHoverText}`}
                    >
                      {point.title}
                    </h3>
                    <p className="text-muted dark:text-light/70 leading-relaxed font-medium">
                      {point.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
