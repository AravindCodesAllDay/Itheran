export default function Service() {
  const DARK_PRIMARY = "#191A23";

  const services = [
    {
      title: "AI Interview",
      description:
        "Improve your online visibility with targeted SEO strategies.",
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
  ];

  return (
    <section id="services" className="px-6 lg:px-32 py-25">
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
                  style={{
                    filter:
                      s.learnMoreIcon === "#B9FF66"
                        ? "brightness(0) saturate(100%) invert(83%) sepia(49%) saturate(401%) hue-rotate(39deg) brightness(108%) contrast(96%)"
                        : "none",
                  }}
                />
              </div>
              <span className="text-lg font-medium">Learn more</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
