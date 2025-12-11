import { useEffect, useState } from "react";
import mesh from "/parallax/mesh.png";
import mesh2 from "/parallax/mesh2.png";
import laptop from "/parallax/laptop.png";
import books from "/parallax/books.png";
import icons from "/parallax/icons.svg";
import robot from "/parallax/robot.svg";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex justify-center h-screen w-full overflow-hidden bg-[#B7D593]"
    >
      {/* 🚀 Foreground Content (Slowest Movement - Appears Closest) */}
      <div
        className="absolute space-y-6 text-PRIMARY -translate-y-1/2 z-30 top-1/2"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }} // Adjusted to 0.2 (Slower)
      >
        <h1 className="text-6xl leading-tight">
          Avatar-Based{" "}
          <span className="font-bold text-SECONDARY">Skill Training</span>
        </h1>

        <p className="text-xl font-medium flex flex-col">
          <span>
            Simulate real-world interviews, Practice Interpersonal & Technical
            skills,
          </span>
          <span>and grow with AI-driven feedback.</span>
        </p>

        <ul className="flex font-bold flex-col sm:flex-row gap-4">
          <li className="bg-SECONDARY text-PRIMARY px-2 p-1 rounded-full">
            Signup without Credit Card
          </li>
          <li className="bg-PRIMARY text-LIGHT-GRAY px-2 p-1 rounded-full">
            Interact with our 3D Avatar
          </li>
          <li className="text-PRIMARY bg-LIGHT-GRAY px-2 p-1 rounded-full">
            Boost your Confidence & Skills
          </li>
        </ul>
      </div>

      {/* 💻 Mid-ground Elements */}
      <img
        src={laptop}
        alt="laptop"
        className="absolute top-2/5 left-10 z-10"
        style={{ transform: `translateY(${scrollY * 0.45}px)` }}
      />
      <img
        src={robot}
        alt="robot"
        className="absolute bottom-0 right-0 z-10"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />

      {/* 📚 Farther Mid-ground Elements */}
      <img
        src={icons}
        alt="icons"
        className="absolute top-1/4 right-1/12 z-5"
        style={{ transform: `translateY(${scrollY * 0.6}px)` }}
      />
      <img
        src={books}
        alt="books"
        className="absolute top-2/5 left-1/12 z-5" // Added size for clarity
        style={{ transform: `translateY(${scrollY * 0.55}px)` }}
      />

      {/* ⛰️ Background Meshes (Fastest Movement - Appears Farthest) */}
      <img
        src={mesh}
        alt="mesh"
        className="absolute bottom-0 h-3/5 w-full z-0"
        // Fastest background movement
        style={{ transform: `translateY(${scrollY * 0.8}px)` }}
      />
      <img
        src={mesh2}
        alt="mesh2"
        className="absolute top-0 h-1/5 w-full z-0"
        // Also fast movement
        style={{ transform: `translateY(${scrollY * 0.7}px)` }}
      />
    </section>
  );
}
