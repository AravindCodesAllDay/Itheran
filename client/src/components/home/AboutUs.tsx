import Lottie from "react-lottie";
import animationData from "../../assets/about.json";

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
    <section id="aboutus" className="section-container bg-primary">
      {/* MAIN CARD */}
      <div
        className="w-full glass rounded-[3rem] flex flex-col lg:flex-row items-center justify-between 
                   px-12 py-20 mb-24 border-white/10 overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 size-96 bg-secondary/10 blur-[100px] pointer-events-none" />

        {/* LEFT SECTION */}
        <div className="flex-1 space-y-8 relative z-10 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-xs font-bold uppercase tracking-[0.2em]">
            Our Story
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-light tracking-tight">
            Who We <span className="text-secondary">Are</span>
          </h2>

          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
            Aitheran is a collective of educators, developers, and innovators
            committed to transforming professional growth through intelligent,
            human-centric AI tools.
          </p>

          <button className="px-10 py-4 rounded-2xl bg-secondary text-primary font-bold text-lg hover:bg-accent hover:scale-105 transition-all duration-300 shadow-glow">
            Join Our Mission
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex items-center justify-center mt-16 lg:mt-0 relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-secondary/20 blur-[50px] rounded-full" />
            <Lottie options={defaultOptions} height={450} width={450} />
          </div>
        </div>
      </div>

      {/* MISSION + VISION */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Mission Card */}
        <div className="glass rounded-4xl p-12 border-white/10 hover:border-secondary/30 transition-all duration-500 group">
          <div className="size-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-primary transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m16 8-8 8" />
              <path d="m8 8 8 8" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold mb-4 text-light">Our Mission</h3>
          <p className="text-muted text-lg leading-relaxed">
            We democratize skill development through AI-driven simulations,
            empowering everyone to build soft and technical capabilities that
            matter in the real world.
          </p>
        </div>

        {/* Vision Card */}
        <div className="glass rounded-4xl p-12 border-white/10 hover:border-accent/30 transition-all duration-500 group">
          <div className="size-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-primary transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.29 7 12 12 20.71 7" />
              <line x1="12" y1="22" x2="12" y2="12" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold mb-4 text-light">Our Vision</h3>
          <p className="text-muted text-lg leading-relaxed">
            To be the global standard for immersive career development tools —
            accessible, adaptive, and impactful for every learner, everywhere.
          </p>
        </div>
      </div>
    </section>
  );
}
