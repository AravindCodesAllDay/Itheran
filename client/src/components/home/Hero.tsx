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
      {/* Fun Background Blobs */}
      <div
        className="absolute top-0 -left-20 size-60 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:opacity-20 dark:mix-blend-normal"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div
        className="absolute top-20 -right-24 size-74 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:opacity-20 dark:mix-blend-normal"
        style={{ transform: `translateY(${scrollY * 0.8}px)` }}
      />
      <div
        className="absolute -bottom-32 left-24 size-74 bg-warning rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 dark:opacity-20 dark:mix-blend-normal"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />

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
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display leading-tight md:leading-none text-light drop-shadow-sm">
            Avatar-Based <br />
            <span className="relative inline-block text-accent transform -rotate-2 hover:rotate-3 transition-transform duration-300">
              Skill Training
              <Squiggle className="text-secondary w-full -bottom-2 md:-bottom-4 left-0 h-4 md:h-6" />
            </span>
          </h1>
        </div>

        <p className="text-lg md:text-3xl font-medium text-light max-w-3xl mx-auto leading-relaxed transform rotate-1">
          Simulate interviews, master soft skills, and grow with{" "}
          <span className="font-bold text-accent decoration-wavy underline decoration-secondary">
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
                "bg-accent/10 text-accent dark:bg-accent/20 dark:text-white dark:border-white/5",
              text: "3D Avatar Interaction",
            },
            {
              color:
                "bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-white dark:border-white/5",
              text: "No Credit Card Needed",
            },
            {
              color:
                "bg-warning/10 text-warning dark:bg-warning/20 dark:text-white dark:border-white/5",
              text: "AI-Driven Feedback",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`px-4 py-2 md:px-8 md:py-4 rounded-3xl ${item.color} font-black text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-0.5 transition-all duration-200 cursor-pointer hover:animate-wiggle border-2 border-transparent`}
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
        className="absolute h-3/5 md:h-[90%] md:top-10 z-0 pointer-events-none opacity-80 lg:opacity-60"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <Lottie options={defaultOptions} />
      </div>
    </section>
  );
}
