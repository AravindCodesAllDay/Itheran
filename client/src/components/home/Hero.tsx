import { useEffect, useState } from "react";
import Lottie from "react-lottie";

import robot from "../../assets/robot.json";

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
      className="relative flex justify-center items-center min-h-[110vh] w-full overflow-hidden bg-linear-to-t from-primary to-secondary/40"
    >
      {/* Background Gradient & Mesh */}
      <div className="absolute inset-0 bg-radial-[at_50%_50%] from-secondary/10 to-transparent z-0 opacity-50" />

      {/* Foreground Content */}
      <div
        className="relative z-30 text-center space-y-8 max-w-4xl px-6"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <div className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-4 animate-pulse">
          Next Gen Skill Development
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight text-light">
          Avatar-Based <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary via-accent to-secondary bg-size-[200%_auto] animate-gradient">
            Skill Training
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          Simulate real-world interviews, practice interpersonal & technical
          skills, and grow with AI-driven feedback in an immersive 3D
          environment.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <div className="glass px-6 py-3 rounded-2xl flex items-center gap-3 group hover:border-secondary/50 transition-all duration-300">
            <div className="size-2 rounded-full bg-secondary group-hover:animate-ping" />
            <span className="text-sm font-semibold tracking-wide text-light">
              3D Avatar Interaction
            </span>
          </div>
          <div className="glass px-6 py-3 rounded-2xl flex items-center gap-3 group hover:border-secondary/50 transition-all duration-300">
            <div className="size-2 rounded-full bg-accent group-hover:animate-ping" />
            <span className="text-sm font-semibold tracking-wide text-light">
              No Credit Card Needed
            </span>
          </div>
          <div className="glass px-6 py-3 rounded-2xl flex items-center gap-3 group hover:border-secondary/50 transition-all duration-300">
            <div className="size-2 rounded-full bg-light group-hover:animate-ping" />
            <span className="text-sm font-semibold tracking-wide text-light">
              AI-Driven Feedback
            </span>
          </div>
        </div>

        <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-8 py-4 bg-secondary text-primary font-bold rounded-2xl hover:bg-accent hover:scale-105 transition-all duration-300 shadow-glow">
            Get Started Now
          </button>
          <button className="px-8 py-4 border border-white/10 glass font-bold rounded-2xl hover:bg-white/5 transition-all duration-300 text-light">
            Watch Demo
          </button>
        </div>
      </div>

      <div
        className="absolute -bottom-[5%] -right-[12%] z-10 opacity-40 md:opacity-100 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Lottie options={defaultOptions} height={700} width={800} />
      </div>
    </section>
  );
}
