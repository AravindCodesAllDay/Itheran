export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-32 bg-white text-DARK-PRIMARY"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mb-10">
        {/* Green Highlight Title */}
        <h2 className="text-3xl md:text-4xl font-semibold rounded-xl px-4 py-2 bg-[#B9FF66] w-fit text-DARK-PRIMARY">
          Contact
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg max-w-3xl text-DARK-PRIMARY/80">
          Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div
        className="rounded-3xl px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-14 items-center 
             bg-LIGHT-GRAY border-2 border-DARK-PRIMARY 
             shadow-[4px_4px_0_0_#191A23] md:shadow-[7px_7px_0_0_#191A23]"
      >
        {/* LEFT = FORM */}
        <form
          className="space-y-5 rounded-2xl p-8 bg-white border-2 border-DARK-PRIMARY
               shadow-[3px_3px_0_0_#191A23]"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-DARK-PRIMARY">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Name"
              className="w-full px-4 py-3 rounded-xl border-2 outline-none 
                   border-DARK-PRIMARY bg-LIGHT-GRAY"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-DARK-PRIMARY">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="example@mail.com"
              className="w-full px-4 py-3 rounded-xl border-2 outline-none 
                   border-DARK-PRIMARY bg-LIGHT-GRAY"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1 text-DARK-PRIMARY">
              Message
            </label>
            <textarea
              required
              rows={4}
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl border-2 outline-none resize-none 
                   border-DARK-PRIMARY bg-LIGHT-GRAY"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-lg font-semibold transition-all
                 bg-DARK-PRIMARY text-LIGHT-GRAY border-2 border-DARK-PRIMARY
                 shadow-[2px_2px_0_0_#8AE500] hover:shadow-[4px_4px_0_0_#8AE500]"
          >
            Send Message
          </button>
        </form>

        {/* RIGHT = TEXT */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Connect & Grow Together
          </h2>

          <p className="text-lg text-[#191A23]/80 leading-relaxed">
            <span>Have questions? Looking for collaboration?</span>
            <span>
              Send us a message — we respond quickly and would love to assist
              you!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
