import { Link } from "react-router-dom";

import animationData from "../../assets/animeOne.json";
import Lottie from "react-lottie";

export default function Hero() {
  const DARK_PRIMARY = "#191A23";
  const LIGHT_GRAY = "#F3F3F3";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
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
  );
}
