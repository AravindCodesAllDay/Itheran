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
    <section id="aboutus" className="py-24 px-6 lg:px-32  text-PRIMARY">
      {/* MAIN CARD */}
      <div
        className="w-full rounded-3xl flex flex-col md:flex-row items-center justify-between 
                   px-10 py-16 mb-24 bg-LIGHT-GRAY border-2 border-PRIMARY 
                   shadow-[4px_4px_0px_0px_#191A23] md:shadow-PRIMARY"
      >
        {/* LEFT SECTION */}
        <div className="flex-1 space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold text-SECONDARY">
            Who We Are
          </h2>

          <p className="text-lg text-[#191A23]/80 leading-relaxed max-w-md">
            We are a collective of educators, developers, and innovators
            committed to transforming professional growth through intelligent,
            human-centric tools.
          </p>

          <button
            className="w-fit py-3 px-5 rounded-xl text-lg font-semibold transition-all
                 bg-PRIMARY text-LIGHT-GRAY border-2 border-PRIMARY
                 shadow-[2px_2px_0_0_#8AE500] hover:shadow-[4px_4px_0_0_#8AE500]"
          >
            Get your free proposal
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>

      {/* MISSION + VISION */}
      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* Mission Card */}
        <div
          className="rounded-3xl p-10 border-2 bg-LIGHT-GRAY border-PRIMARY
                     shadow-[4px_4px_0px_0px_#191A23] hover:-translate-y-1 hover:shadow-PRIMARY transition"
        >
          <h3 className="text-3xl font-semibold mb-4 px-3 py-1 rounded-md w-fit text-LIGHT-GRAY bg-PRIMARY">
            Our Mission
          </h3>
          <p className="text-[#191A23]/80 text-lg leading-relaxed">
            We democratize skill development through AI-driven simulations,
            empowering everyone to build soft and technical capabilities.
          </p>
        </div>

        {/* Vision Card */}
        <div
          className="rounded-3xl p-10 border-2 bg-LIGHT-GRAY border-PRIMARY
                     shadow-[4px_4px_0px_0px_#191A23] hover:-translate-y-1 hover:shadow-PRIMARY transition"
        >
          <h3 className="text-3xl font-semibold mb-4 px-3 py-1 rounded-md w-fit text-LIGHT-GRAY bg-PRIMARY">
            Our Vision
          </h3>
          <p className="text-[#191A23]/80 text-lg leading-relaxed">
            To be the global standard for immersive career development tools —
            accessible, adaptive, and impactful.
          </p>
        </div>
      </div>
    </section>
  );
}
