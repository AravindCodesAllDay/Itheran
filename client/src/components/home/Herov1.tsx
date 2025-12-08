import { Link } from "react-router-dom";

import animationData from "../../assets/animeOne.json";
import Lottie from "react-lottie";

export default function Hero() {
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
      id="hero"
      className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-40 py-24 gap-10"
    >
      {/* LEFT CONTENT */}
      <div className="max-w-2xl space-y-6">
        <p className="uppercase tracking-widest text-sm">
          Unlock Your Potential
        </p>

        <h1 className="text-5xl leading-tight">
          Avatar-Based <span className="font-bold">Skill Training</span>
        </h1>

        <p className="text-lg">
          Simulate real-world interviews, Practice Interpersonal & Technical
          skills, and grow with AI-driven feedback.
        </p>

        <ul className="flex font-bold flex-col sm:flex-row gap-4 text-sm mt-4">
          <li className="bg-GREEN text-DARK-PRIMARY px-2 p-1 rounded-full">
            Signup without Credit Card
          </li>
          <li className="bg-DARK-PRIMARY text-LIGHT-GRAY px-2 p-1 rounded-full">
            Interact with our 3D Avatar
          </li>
          <li className="text-GREEN bg-DARK-PRIMARY px-2 p-1 rounded-full">
            Boost your Confidence & Skills
          </li>
        </ul>

        <Link
          to="#"
          className="mt-5 inline-block border-2 rounded-2xl transition duration-500 px-5 py-3 text-xl bg-DARK-PRIMARY text-LIGHT-GRAY"
        >
          Get Started
        </Link>
      </div>

      {/* LOTTIE ANIMATION */}
      <Lottie options={defaultOptions} height={500} width={500} />
    </section>
  );
}
