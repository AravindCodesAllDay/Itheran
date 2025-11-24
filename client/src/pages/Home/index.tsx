import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../assets/animeOne.json";
import { useState } from "react"; // Import useState

export default function Home() {

  const [openStep, setOpenStep] = useState<number | null>(0);

  const DARK_PRIMARY = "#191A23";
  const LIGHT_GRAY = "#F3F3F3";
  const GREEN_ACCENT = "#B9FF66";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  interface WorkStep {
    step: string;
    title: string;
    desc: string;
  }


  const services = [
    {
      title: "AI Interview",
      description: "Improve your online visibility with targeted SEO strategies.",
      bg: "#F3F3F3",
      titleBg: "#B9FF66",
      learnMoreBg: "#191A23",
      learnMoreIcon: "#B9FF66",
      illustration: <img src="/interview.png" className="w-25" />,
    },
    {
      title: "Resume Generator",
      description: "Boost your results quickly with optimized PPC campaigns.",
      bg: "#B9FF66",
      titleBg: "#F3F3F3",
      learnMoreBg: "#191A23",
      learnMoreIcon: "#B9FF66",
      illustration: <img src="/video-chat.png" className="w-25" />,
    },
    {
      title: "Skill Training",
      description: "Grow your audience with creative social media strategies.",
      bg: "#191A23",
      titleBg: "#F3F3F3",
      learnMoreBg: "#F3F3F3",
      learnMoreIcon: "#191A23",
      illustration: <img src="/training.png" className="w-25" />,
    },
    {
      title: "Email Marketing",
      description: "Build lasting relationships through targeted email campaigns.",
      bg: "#F3F3F3",
      titleBg: "#B9FF66",
      learnMoreBg: "#191A23",
      learnMoreIcon: "#B9FF66",
      illustration: <img src="/pics/service4.png" className="w-25" />,
    },
  ];

  // 'How We Work' steps derived from Code 2
  const workSteps: WorkStep[] = [
    {
      step: "01",
      title: "Skill Mapping",
      desc: "We assess and recommend the best learning paths.",
    },
    {
      step: "02",
      title: "Interactive Training",
      desc: "Practice with real-time feedback from AI avatars.",
    },
    {
      step: "03",
      title: "Analyse",
      desc: "Get every bit of data, to evaluate your skills through datasets.",
    },
    {
      step: "04",
      title: "Track & Improve",
      desc: "Monitor your progress and sharpen your expertise.",
    },
  ];


  // Function to handle step click
  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ color: DARK_PRIMARY }}
    >
      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-40 py-24 gap-10">
        
        {/* LEFT CONTENT */}
        <div className="max-w-2xl space-y-6">
          <p className="uppercase tracking-widest text-sm">
            Unlock Your Interview Potential
          </p>

          <h1 className="text-5xl leading-tight">
            Avatar-Based <span className="font-bold">Skill Training</span>
            <br />
            For Future Leaders
          </h1>

          <p className="text-lg">
            Simulate real-world interviews, practice interpersonal and technical
            skills, and grow with AI-driven feedback.
          </p>

          <ul className="flex flex-col sm:flex-row gap-4 text-sm mt-4">
            <li>No Credit Card Required</li>
            <li>Real-time 3D Avatar Simulations</li>
            <li>Boost Confidence and Communication</li>
          </ul>

          <Link
            to="/login"
            className="mt-5 inline-block border-2 rounded-2xl transition duration-500 px-5 py-3 text-xl"
            style={{ backgroundColor: DARK_PRIMARY, color: LIGHT_GRAY }}
          >
            Get Started
          </Link>
        </div>

        {/* LOTTIE ANIMATION */}
        <Lottie options={defaultOptions} height={400} width={400} />
      </section>

      {/* --- */}
      
      {/* SERVICES SECTION */}
      <section className="px-6 lg:px-32 py-25">
        {/* Heading + Description Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mb-10">
          {/* Green Highlight Title */}
          <h2
            className="text-3xl md:text-4xl font-semibold rounded-xl px-4 py-2 bg-[#B9FF66] w-fit"
            style={{ color: DARK_PRIMARY }}
          >
            Services
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg max-w-3xl text-[#191A23]/80">
            At our digital marketing agency, we offer a range of services to help
            businesses grow and succeed online. These services include:
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {services.map((s, i) => (
            <div
              key={i}
              className="relative rounded-3xl p-10 shadow-md border-2 flex flex-col justify-between"
              style={{
                backgroundColor: s.bg,
                borderColor: "#191A23",
                color: s.bg === "#191A23" ? "#F3F3F3" : "#191A23",
                boxShadow: `4px 4px 0 0 ${DARK_PRIMARY}`,
              }}
            >
              {/* TOP ROW: TITLE + ILLUSTRATION */}
              <div className="flex justify-between items-start">

                {/* TITLE */}
                <span
                  className="px-2 py-1 text-xl rounded-md inline-block w-fit"
                  style={{
                    backgroundColor: s.titleBg,
                    color: "#191A23",
                  }}
                >
                  {s.title}
                </span>

                {/* ILLUSTRATION ON RIGHT SIDE */}
                <div className="w-28 h-28 flex items-center justify-center">
                  {s.illustration}
                </div>
              </div>

              {/* LEARN MORE BUTTON */}
              <div className="mt-10 flex items-center gap-3 cursor-pointer">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: s.learnMoreBg,
                  }}
                >
                  <img
                    src="/right-arrow.png"
                    alt="learn more"
                    className="w-5 h-5"
                    style={{ filter: s.learnMoreIcon === '#B9FF66' ? 'brightness(0) saturate(100%) invert(83%) sepia(49%) saturate(401%) hue-rotate(39deg) brightness(108%) contrast(96%)' : 'none' }}
                  />

                </div>
                <span className="text-lg font-medium">Learn more</span>
              </div>
            </div>

          ))}
        </div>
      </section>

      {/* --- */}

      {/* HOW WE WORK SECTION (NOW SECOND) */}
      <section className="px-6 lg:px-32 py-20 ">
        <div className="w-full">
          {/* Section Header */}
          <div className="mb-10">
            <h2
              className="text-3xl md:text-4xl font-semibold rounded-xl px-4 py-2 bg-[#B9FF66] w-fit"
              style={{ color: DARK_PRIMARY }}
            >
              Our Working Process
            </h2>
            <p className="mt-2 text-base md:text-lg text-[#191A23]/80">
              Step-by-Step Guide to Achieving Your Business Goals
            </p>
          </div>

          {/* Accordion Steps */}
          <div className="space-y-6">
            {workSteps.map((item, index) => {
              const isOpen = openStep === index;

              return (
                <div
                  key={index}
                  className="rounded-3xl p-6 shadow-2xl border-2 border-transparent cursor-pointer transition duration-300"
                  style={{ 
                    backgroundColor: isOpen ? GREEN_ACCENT : LIGHT_GRAY, 
                    borderColor: isOpen ? GREEN_ACCENT : LIGHT_GRAY,
                    boxShadow: `4px 4px 0 0 ${DARK_PRIMARY}`,
                    color: DARK_PRIMARY,
                  }}
                  onClick={() => toggleStep(index)} // Entire block is clickable
                >
                  <div className="flex items-start justify-between">
                    {/* Step Number and Title */}
                    <div className="flex flex-col sm:flex-row items-baseline gap-4">
                      <span className="text-4xl font-light tracking-tight">
                        {item.step}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-semibold">
                        {item.title}
                      </h3>
                    </div>

                    {/* Toggle Button (simplified icon) */}
                    <button
                      className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#191A23]"
                      style={{
                        backgroundColor: isOpen ? LIGHT_GRAY : DARK_PRIMARY,
                        color: isOpen ? DARK_PRIMARY : LIGHT_GRAY,
                      }}
                      // The whole container is clickable, but you can explicitly use the button too.
                      // onClick={() => toggleStep(index)} 
                    >
                      {/* Shows '-' for the active step, '+' for others */}
                      {isOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Description (Conditionally rendered) */}
                  {isOpen && (
                    <p className="mt-4 pl-14 max-w-2xl text-base text-[#191A23] animate-in slide-in-from-top duration-300">
                      {item.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}