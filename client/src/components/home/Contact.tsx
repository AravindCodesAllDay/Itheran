export default function Contact() {
  const DARK_PRIMARY = "#191A23";
  const LIGHT_GRAY = "#F3F3F3";

  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-32 bg-white text-[#191A23]"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mb-10">
        {/* Green Highlight Title */}
        <h2
          className="text-3xl md:text-4xl font-semibold rounded-xl px-4 py-2 bg-[#B9FF66] w-fit"
          style={{ color: DARK_PRIMARY }}
        >
          Contact
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg max-w-3xl text-[#191A23]/80">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div
        className="rounded-3xl px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
        style={{
          backgroundColor: LIGHT_GRAY,
          border: `2px solid ${DARK_PRIMARY}`,
          boxShadow: `4px 4px 0 0 ${DARK_PRIMARY}`,
        }}
      >
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Connect & Grow Together
          </h2>

          <p className="text-lg text-[#191A23]/80 leading-relaxed">
            Have questions? Looking for collaboration? Send us a message — we
            respond quickly and would love to assist you!
          </p>

          <div className="mt-4 space-y-2">
            <p className="font-semibold">
              📧 <span className="font-normal">support@itheran.ai</span>
            </p>
            <p className="font-semibold">
              📞 <span className="font-normal">+91 98765 43210</span>
            </p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form
          className="space-y-5 rounded-2xl p-8"
          style={{
            backgroundColor: "white",
            border: `2px solid ${DARK_PRIMARY}`,
            boxShadow: `3px 3px 0 0 ${DARK_PRIMARY}`,
          }}
        >
          {/* Name */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              style={{ color: DARK_PRIMARY }}
            >
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border-2 outline-none"
              style={{
                borderColor: DARK_PRIMARY,
                backgroundColor: LIGHT_GRAY,
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              style={{ color: DARK_PRIMARY }}
            >
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="example@mail.com"
              className="w-full px-4 py-3 rounded-xl border-2 outline-none"
              style={{
                borderColor: DARK_PRIMARY,
                backgroundColor: LIGHT_GRAY,
              }}
            />
          </div>

          {/* Message */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              style={{ color: DARK_PRIMARY }}
            >
              Message
            </label>
            <textarea
              required
              rows={4}
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl border-2 outline-none resize-none"
              style={{
                borderColor: DARK_PRIMARY,
                backgroundColor: LIGHT_GRAY,
              }}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-lg font-semibold transition"
            style={{
              backgroundColor: DARK_PRIMARY,
              color: LIGHT_GRAY,
              border: `2px solid ${DARK_PRIMARY}`,
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
