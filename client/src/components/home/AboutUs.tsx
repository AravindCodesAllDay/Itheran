export default function AboutUs() {
  const DARK_PRIMARY = "#191A23";
  const LIGHT_GRAY = "#F3F3F3";
  const GREEN_ACCENT = "#B9FF66";
  return (
    <section
      id="aboutus"
      className="py-24 px-6 lg:px-32 bg-white text-[#191A23]"
    >
      <div
        className="w-full rounded-3xl flex flex-col md:flex-row items-center justify-between px-10 py-16 mb-24"
        style={{
          backgroundColor: LIGHT_GRAY,
          border: `2px solid ${DARK_PRIMARY}`,
          boxShadow: `4px 4px 0 0 ${DARK_PRIMARY}`,
        }}
      >
        {/* LEFT SECTION */}
        <div className="flex-1 space-y-5">
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: DARK_PRIMARY }}
          >
            Who We Are
          </h2>

          <p className="text-lg text-[#191A23]/80 leading-relaxed max-w-md">
            We are a collective of educators, developers, and innovators
            committed to transforming professional growth through intelligent,
            human-centric tools.
          </p>

          <button
            className="px-6 py-3 rounded-xl font-semibold text-lg cursor-pointer transition"
            style={{
              backgroundColor: DARK_PRIMARY,
              color: LIGHT_GRAY,
              border: `2px solid ${DARK_PRIMARY}`,
            }}
          >
            Get your free proposal
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
          <img
            src="/aboutus.png"
            alt="About Us Graphic"
            className="w-[300px] md:w-[380px] object-contain"
          />
        </div>
      </div>

      {/* MISSION + VISION */}
      <div className="grid md:grid-cols-2 gap-14 items-start mb-24">
        {/* Mission Card */}
        <div
          className="rounded-3xl p-10 shadow-xl border-2"
          style={{
            backgroundColor: LIGHT_GRAY,
            borderColor: DARK_PRIMARY,
            boxShadow: `4px 4px 0 0 ${DARK_PRIMARY}`,
          }}
        >
          <h3
            className="text-3xl font-semibold mb-4 px-3 py-1 rounded-md w-fit"
            style={{ backgroundColor: GREEN_ACCENT, color: DARK_PRIMARY }}
          >
            Our Mission
          </h3>

          <p className="text-[#191A23]/80 text-lg leading-relaxed">
            We democratize skill development through AI-driven simulations,
            empowering everyone to build soft and technical capabilities.
          </p>
        </div>

        {/* Vision Card */}
        <div
          className="rounded-3xl p-10 shadow-xl border-2"
          style={{
            backgroundColor: LIGHT_GRAY,
            borderColor: DARK_PRIMARY,
            boxShadow: `4px 4px 0 0 ${DARK_PRIMARY}`,
          }}
        >
          <h3
            className="text-3xl font-semibold mb-4 px-3 py-1 rounded-md w-fit"
            style={{ backgroundColor: GREEN_ACCENT, color: DARK_PRIMARY }}
          >
            Our Vision
          </h3>

          <p className="text-[#191A23]/80 text-lg leading-relaxed">
            To be the global standard for immersive career development tools —
            accessible, adaptive, and impactful.
          </p>
        </div>
      </div>

      {/* WHAT DRIVES US */}
      <div>
        <h3 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          What Drives Us
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: "🚀",
              title: "Innovation",
              desc: "Always evolving with tech and user needs.",
            },
            {
              icon: "🌍",
              title: "Accessibility",
              desc: "Upskilling that reaches across the globe.",
            },
            {
              icon: "💡",
              title: "Creativity",
              desc: "We build with boldness and imagination.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 rounded-3xl border-2 transition"
              style={{
                backgroundColor: LIGHT_GRAY,
                borderColor: DARK_PRIMARY,
                boxShadow: `4px 4px 0 0 ${DARK_PRIMARY}`,
              }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-[#191A23]/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
