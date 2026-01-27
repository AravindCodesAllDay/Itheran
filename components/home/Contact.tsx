import ClickToCopy from "../ClickToCopy";

import { CircleDoodle } from "../FunElements";
export default function Contact() {
  const contactDetails = [
    {
      title: "Call Us",
      value: `+91 ${process.env.NEXT_PUBLIC_MOBILE}`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      title: "Email Us",
      value: process.env.NEXT_PUBLIC_MAIL,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="section-container bg-surface relative rounded-b-[3rem] z-10 overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center text-center gap-4 mb-20 w-full max-w-6xl mx-auto">
        <h2 className="inline-block px-4 py-1.5 rounded-full border border-theme-1/30 bg-theme-1/10 text-theme-1 text-xs font-bold uppercase tracking-[0.2em]">
          Get In Touch
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light relative">
          Let's Start a <span className="text-theme-1">Conversation</span>
        </h3>
        <p className="text-muted max-w-2xl text-lg leading-relaxed">
          Have questions or ready to transform your team's skills? Reach out
          today.
        </p>
      </div>

      <CircleDoodle className="text-theme-3 top-20 left-1/4 w-32 h-32 opacity-60" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* LEFT = FORM */}
        <form className="bg-surface shadow-[10px_10px_0px_0px_rgba(0,0,0,0.05)] border border-border p-6 md:p-10 rounded-[2.5rem] space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2 ml-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="input-odoo"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2 ml-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                className="input-odoo focus:border-theme-2/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2 ml-1">
              Message
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell us about your needs..."
              className="input-odoo resize-none focus:border-theme-3/50"
            />
          </div>

          <button
            type="submit"
            className="w-full py-5 rounded-2xl bg-theme-1 text-white font-bold text-lg hover:bg-theme-2 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-theme-1/20 hover:shadow-theme-2/30"
          >
            Send Message
          </button>
        </form>

        {/* RIGHT = TEXT / CONTACT INFO */}
        <div className="space-y-10 lg:pl-10">
          <div className="space-y-6">
            <h4 className="text-3xl font-bold tracking-tight">
              Connect With Us <br />
              <span className="text-theme-2">Anywhere, Anytime.</span>
            </h4>
            <p className="text-muted text-lg leading-relaxed">
              Our team is dedicated to providing the best AI-driven training
              experience. Whether you're a student or a corporate partner, we're
              here to help you grow.
            </p>
          </div>

          <div className="space-y-6">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 group text-left w-full p-4 rounded-3xl hover:bg-surface-highlight transition-all duration-300 border border-transparent hover:border-border hover:shadow-sm"
              >
                <div
                  className={`size-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-inner ${
                    index === 0
                      ? "bg-theme-1/10 text-theme-1 group-hover:bg-theme-1 group-hover:text-white"
                      : "bg-theme-2/10 text-theme-2 group-hover:bg-theme-2 group-hover:text-white"
                  }`}
                >
                  {item.icon}
                </div>
                <ClickToCopy
                  value={item.value || ""}
                  label={item.title}
                  className="flex-1"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
