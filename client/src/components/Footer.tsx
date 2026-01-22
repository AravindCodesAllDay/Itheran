import { useState, useEffect } from "react";
import ClickToCopy from "./common/ClickToCopy";
import { Link } from "react-router-dom";

export default function Footer() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem("theme") !== "light";
  });

  // 1. Define the hover styles mapping
  const themeHoverStyles: Record<string, string> = {
    "theme-1": "hover:bg-theme-1 hover:shadow-theme-1/40",
    "theme-2": "hover:bg-theme-2 hover:shadow-theme-2/40",
    "theme-3": "hover:bg-theme-3 hover:shadow-theme-3/40",
    "theme-4": "hover:bg-theme-4 hover:shadow-theme-4/40",
  };

  const contactInfo = [
    {
      value: import.meta.env.VITE_MAIL,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      ),
      theme: "theme-1",
    },
    {
      value: `+91 ${import.meta.env.VITE_MOBILE}`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
      ),
      theme: "theme-2",
    },
    {
      value: import.meta.env.VITE_ADDRESS,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      ),
      theme: "theme-3",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      theme: "theme-1",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      theme: "theme-2",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      theme: "theme-4",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
  ];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <footer className="w-full mt-auto py-10 px-6 sm:px-10 lg:px-32 text-muted relative z-20 shadow-[-10px_-10px_30px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-8 lg:space-y-0">
          <Link
            to="/"
            className="flex items-center text-3xl font-display font-bold tracking-tight text-light hover:opacity-80 transition duration-150"
          >
            <span className="text-theme-1 mr-2 text-4xl">★</span>
            <span className="text-light">{import.meta.env.VITE_APP_NAME}</span>
          </Link>

          <div className="flex items-center space-x-8">
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`size-10 rounded-full bg-surface-highlight dark:bg-black/40 border border-black/5 dark:border-white/10 flex items-center justify-center transition duration-300 hover:scale-110 hover:text-white text-muted shadow-sm ${
                    themeHoverStyles[social.theme] || ""
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full bg-surface-highlight dark:bg-black/40 border border-black/5 dark:border-white/10 transition-all duration-300 shadow-sm hover:rotate-12 ${
                isDark
                  ? "text-theme-3 hover:border-theme-3"
                  : "text-theme-2 hover:border-theme-2"
              }`}
            >
              {/* Sun/Moon SVG Icons */}
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MIDDLE SECTION: Contact Info and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className={`size-10 rounded-full bg-surface-highlight dark:bg-black/20 border border-black/5 dark:border-white/5 flex items-center justify-center shadow-sm text-${item.theme} hover:bg-${item.theme}/10 transition-colors cursor-pointer group`}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <ClickToCopy value={item.value} />
              </div>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col">
            <h4 className="text-light font-display font-bold text-lg mb-4">
              Stay Updated
            </h4>
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white dark:bg-white/5 rounded-3xl border border-black/5 dark:border-white/5 shadow-premium">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-2xl bg-surface-highlight/50 dark:bg-black/40 border border-transparent focus:outline-none text-light placeholder-muted font-medium focus:ring-2 focus:ring-theme-1/20"
              />
              <button className="px-8 py-3 rounded-2xl bg-theme-1 text-white font-bold hover:bg-theme-2 transition-colors duration-300 shadow-lg shadow-theme-1/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest uppercase">
          <p>
            © {new Date().getFullYear()} {import.meta.env.VITE_APP_NAME}{" "}
            Solutions Private Limited
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-theme-1 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-theme-2 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
