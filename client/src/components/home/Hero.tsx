import { useEffect, useState } from "react";
import bg from "/parallax/bg.jpg";
import moon from "/parallax/moon.png";
import mountain from "/parallax/mountain.png";
import plants from "/parallax/plants.png";
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
      {/* Background */}
      <img
        src={bg}
        alt="background Sky"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />

      {/* Moon - Center */}
      <img
        src={moon}
        alt="moon"
        className="absolute z-10 w-[300px] top-1/4"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />

      {/* ✅ Birds - Between Moon & Mountain */}
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
        className="absolute bottom-0 left-0 h-3/5 w-full z-20"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />

      {/* Plants - Foreground Bottom */}
      <img
        src={plants}
        alt="plants"
        className="absolute bottom-0 left-0 w-full z-30"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
    </section>
  );
}
