import Lottie from "react-lottie";
import animationData from "../../assets/about.json";
import { Link } from "react-router-dom";
import { SmoothUnderline } from "../FunElements";

export default function AboutUs() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section
      id="aboutus"
      className="section-container bg-surface relative overflow-hidden"
    >
      {/* Decorative BG */}
      <div className="absolute top-20 right-0 w-48 h-48 md:w-96 md:h-96 bg-about-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:opacity-10 dark:mix-blend-normal" />
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-about-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:opacity-10 dark:mix-blend-normal" />

      {/* MAIN CARD */}
      <div
        className="w-full bg-white dark:bg-white/5 rounded-4xl md:rounded-[3rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.05)] border-2 border-primary/5 dark:border-white/5 flex flex-col lg:flex-row items-center justify-between 
                   px-6 py-10 md:px-10 md:py-16 mb-16 md:mb-24 relative z-10 hover:-translate-y-2 transition-transform duration-500"
      >
        {/* LEFT SECTION */}
        <div className="flex-1 space-y-6 relative z-10 text-center lg:text-left">
          <div className="inline-block px-4 py-2 rounded-2xl bg-about-secondary text-white text-xs font-black uppercase tracking-widest transform -rotate-2">
            Our Story 📖
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-about-primary dark:text-light tracking-tight">
            Who We <br />
            <span className="relative inline-block text-about-secondary">
              Are
              <SmoothUnderline className="text-about-primary w-full" />
            </span>
          </h2>

          <p className="text-xl text-muted leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            {import.meta.env.VITE_APP_NAME} is a collective of educators,
            developers, and innovators committed to transforming professional
            growth through intelligent, human-centric AI tools.
          </p>

          <Link to={"/features/about"}>
            <button className="mt-4 px-10 py-4 rounded-2xl bg-about-primary text-white font-black text-lg hover:bg-about-secondary hover:scale-105 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none translate-y-0 active:translate-y-1">
              Know More
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex items-center justify-center mt-12 lg:mt-0 relative z-10">
          <div className="relative transform hover:scale-105 transition-transform duration-500">
            {/* Blob behind Lottie */}
            <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full animate-pulse" />
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      </div>

      {/* MISSION + VISION */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Mission Card */}
        <div className="bg-about-primary/5 dark:bg-about-primary/10 rounded-[2.5rem] p-6 md:p-10 border-2 border-about-primary/10 dark:border-about-primary/20 hover:border-about-primary transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl">
          <div className="size-20 rounded-3xl bg-white dark:bg-white/10 shadow-sm flex items-center justify-center text-about-primary mb-6 group-hover:scale-110 transition-transform duration-300 rotate-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m16 8-8 8" />
              <path d="m8 8 8 8" />
            </svg>
          </div>
          <h3 className="text-4xl font-display font-bold mb-4 text-about-primary dark:text-white">
            Our Mission
          </h3>
          <p className="text-muted text-lg leading-relaxed font-medium">
            We democratize skill development through AI-driven simulations,
            empowering everyone to build soft and technical capabilities that
            matter in the real world.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-about-secondary/5 dark:bg-about-secondary/10 rounded-[2.5rem] p-6 md:p-10 border-2 border-about-secondary/10 dark:border-about-secondary/20 hover:border-about-secondary transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl">
          <div className="size-20 rounded-3xl bg-white dark:bg-white/10 shadow-sm flex items-center justify-center text-about-secondary mb-6 group-hover:scale-110 transition-transform duration-300 -rotate-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.29 7 12 12 20.71 7" />
              <line x1="12" y1="22" x2="12" y2="12" />
            </svg>
          </div>
          <h3 className="text-4xl font-display font-bold mb-4 text-about-secondary dark:text-white">
            Our Vision
          </h3>
          <p className="text-muted text-lg leading-relaxed font-medium">
            To be the global standard for immersive career development tools —
            accessible, adaptive, and impactful for every learner, everywhere.
          </p>
        </div>
      </div>
    </section>
  );
}
