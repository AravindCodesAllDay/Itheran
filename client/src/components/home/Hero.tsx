import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import robot from "../../assets/robot2.json";
import { ArrowDoodle, StarBurst, Squiggle } from "../FunElements";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: robot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex justify-center items-center min-h-dvh w-full overflow-hidden bg-primary text-light"
    >
      {/* Fun Background Blobs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob dark:opacity-20 dark:mix-blend-normal" />
      <div className="absolute top-0 -right-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000 dark:opacity-20 dark:mix-blend-normal" />
      <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000 dark:opacity-20 dark:mix-blend-normal" />

      {/* Main Content */}
      <div
        className="relative z-30 text-center space-y-8 max-w-5xl px-6 mt-12"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        {/* Badge */}
        <div className="inline-block px-6 py-2 rounded-full border-2 border-secondary bg-surface text-secondary text-sm font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_var(--color-secondary)] hover:translate-y-1 hover:shadow-none transition-all cursor-default animate-bounce relative z-10">
          🚀 Next Gen Skill Development
        </div>

        {/* Heading */}
        <div className="relative">
          <StarBurst className="text-yellow-400 -top-8 -right-8 w-16 h-16 animate-spin-slow" />
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-none text-light drop-shadow-sm">
            Avatar-Based <br />
            <span className="relative inline-block text-secondary transform -rotate-2 hover:rotate-3 transition-transform duration-300">
              Skill Training
              <Squiggle className="text-accent w-full -bottom-4 left-0 h-6" />
            </span>
          </h1>
        </div>

        <p className="text-2xl md:text-3xl font-medium text-muted max-w-3xl mx-auto leading-relaxed transform rotate-1">
          Simulate interviews, master soft skills, and grow with{" "}
          <span className="font-bold text-secondary decoration-wavy underline decoration-accent">
            AI feedback
          </span>{" "}
          in a 3D world!
        </p>

        {/* Feature Cards Loop */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-8 relative">
          <ArrowDoodle className="text-secondary h-24 w-24 absolute -left-12 -top-10 transform -rotate-45 hidden lg:block" />

          {[
            {
              color:
                "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-100 dark:border-purple-500/30",
              text: "3D Avatar Interaction",
            },
            {
              color:
                "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-100 dark:border-teal-500/30",
              text: "No Credit Card Needed",
            },
            {
              color:
                "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-100 dark:border-orange-500/30",
              text: "AI-Driven Feedback",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`px-8 py-4 rounded-3xl ${item.color} font-black text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 cursor-pointer hover:animate-wiggle border-2 border-transparent`}
            >
              {item.text}
            </div>
          ))}
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
        className="absolute bottom-0 right-0 h-1/2 md:h-3/4 z-10 pointer-events-none opacity-20 lg:opacity-100 lg:blur-sm lg:right-[-10%]"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <Lottie options={defaultOptions} />
      </div>
    </section>
  );
}
