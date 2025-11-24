

import aboutHeader from "/aboutus.png";

export default function AboutUs() {
  const DARK_PRIMARY = "#191A23";
  const LIGHT_GRAY = "#F3F3F3";
  const GREEN_ACCENT = "#B9FF66";

  return (
    <>
      

      <div className="flex flex-col min-h-screen bg-white text-[#191A23] mt-24">

        {/* HEADER BANNER */}
        <div className="relative h-96 w-full overflow-hidden">
          <img
            src={aboutHeader}
            className="absolute w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-6xl font-extrabold tracking-widest drop-shadow-lg px-6 py-2 rounded-xl"
              style={{ backgroundColor: GREEN_ACCENT, color: DARK_PRIMARY }}
            >
              About Us
            </h1>
          </div>
        </div>

        {/* WHO WE ARE */}
        <section className="py-20 px-6 lg:px-32 bg-white text-center">
          <h2
            className="text-4xl font-semibold rounded-xl px-4 py-2 w-fit mx-auto mb-6"
            style={{ backgroundColor: GREEN_ACCENT, color: DARK_PRIMARY }}
          >
            Who We Are
          </h2>

          <p className="text-lg max-w-3xl mx-auto text-[#191A23]/80 leading-relaxed">
            We are a collective of educators, developers, and innovators
            committed to transforming professional growth through intelligent,
            human-centric tools.
          </p>
        </section>

        {/* MISSION & VISION */}
        <section className="py-24 px-6 lg:px-32 bg-white">
          <div className="grid md:grid-cols-2 gap-14 items-start">

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
                To be the global standard for immersive career development
                tools — accessible, adaptive, and impactful.
              </p>
            </div>

          </div>
        </section>

        {/* WHAT DRIVES US */}
        <section className="py-24 px-6 lg:px-32 bg-white">
          <h3 className="text-4xl font-semibold text-center mb-16">
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
        </section>

        
      </div>
    </>
  );
}
