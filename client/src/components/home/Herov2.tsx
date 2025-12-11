import { useEffect, useState } from "react";
import bg from "/parallax/bg.jpg";
import moon from "/parallax/moon.png";
import mountain from "/parallax/mountain.png";
import trees from "/parallax/trees.png";
import birds from "/parallax/birds.png";
import cloud1 from "/parallax/cloud1.png";
import cloud2 from "/parallax/cloud2.png";

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
      className="relative flex justify-center h-screen w-full overflow-hidden"
    >
      <div className="absolute max-w-2xl space-y-6 text-LIGHT-GRAY -translate-y-1/2 z-30 top-1/2">
        <h1 className="text-5xl leading-tight">
          Avatar-Based{" "}
          <span className="font-bold text-SECONDARY">Skill Training</span>
        </h1>

        <p className="text-lg font-medium">
          Simulate real-world interviews, Practice Interpersonal & Technical
          skills, and grow with AI-driven feedback.
        </p>

        <ul className="flex font-bold flex-col sm:flex-row gap-4 text-sm mt-4">
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

      {/* Background */}
      <img
        src={bg}
        alt="background Sky"
        className="absolute w-full h-full object-cover opacity-65 z-0"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />

      {/* Moon - Center */}
      <img
        src={moon}
        alt="moon"
        className="absolute z-10 w-[300px] top-1/4"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />

      {/* Birds - Between Moon & Mountain */}
      <img
        src={birds}
        alt="birds"
        className="absolute z-15 w-[400px] right-0 top-1/3 pointer-events-none"
        style={{
          transform: `
      translateY(${scrollY * 0.3}px)
      translateX(${scrollY * -0.2}px)
    `,
        }}
      />

      <img
        src={cloud2}
        alt="cloud"
        className="absolute z-10 w-[400px] right-0 top-1/3 pointer-events-none"
        style={{
          transform: `
      translateY(${scrollY * 0.3}px)
      translateX(${scrollY * -0.1}px)
    `,
        }}
      />
      <img
        src={cloud1}
        alt="clouds"
        className="absolute z-10 w-[400px] left-0 top-1/3 pointer-events-none"
        style={{
          transform: `
      translateY(${scrollY * 0.3}px)
      translateX(${scrollY * -0.1}px)
    `,
        }}
      />

      {/* Mountain - Bottom */}
      <img
        src={mountain}
        alt="mountain"
        className="absolute bottom-0 h-3/5 w-full z-20"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />

      {/* trees - Foreground Bottom */}
      <img
        src={trees}
        alt="trees"
        className="absolute bottom-0 w-full z-30"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
    </section>
  );
}
