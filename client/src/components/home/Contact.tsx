export default function Contact() {
  return (
    <section id="contact" className="section-container bg-primary text-light">
      <div className="relative z-10 flex flex-col items-center text-center gap-4 mb-20 w-full max-w-6xl mx-auto">
        <h2 className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-xs font-bold uppercase tracking-[0.2em]">
          Get In Touch
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-light">
          Let's Start a <span className="text-secondary">Conversation</span>
        </h3>
        <p className="text-muted max-w-2xl text-lg leading-relaxed">
          Have questions or ready to transform your team's skills? Reach out
          today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* LEFT = FORM */}
        <form className="glass p-10 rounded-[2.5rem] space-y-6 border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2 ml-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-secondary/50 transition-colors text-light"
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
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-secondary/50 transition-colors text-light"
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
              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-secondary/50 transition-colors text-light resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-5 rounded-2xl bg-secondary text-primary font-bold text-lg hover:bg-accent hover:scale-[1.02] transition-all duration-300 shadow-glow"
          >
            Send Message
          </button>
        </form>

        {/* RIGHT = TEXT / CONTACT INFO */}
        <div className="space-y-10 lg:pl-10">
          <div className="space-y-6">
            <h4 className="text-3xl font-bold tracking-tight">
              Connect With Us <br />
              <span className="text-secondary">Anywhere, Anytime.</span>
            </h4>
            <p className="text-muted text-lg leading-relaxed">
              Our team is dedicated to providing the best AI-driven training
              experience. Whether you're a student or a corporate partner, we're
              here to help you grow.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="size-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors duration-300">
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
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted">
                  Call Us
                </p>
                <p className="text-lg font-semibold">+1 (555) 000-0000</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="size-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors duration-300">
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
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted">
                  Email Us
                </p>
                <p className="text-lg font-semibold">hello@aitheran.ai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
