import React from "react";

const SocialIcon = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="size-6 flex items-center justify-center transition duration-300 hover:scale-110 stroke-LIGHT-GRAY hover:stroke-GREEN"
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="w-full mt-auto py-8 px-6 sm:px-10 lg:px-20 rounded-t-3xl border-t-8 bg-DARK-PRIMARY text-LIGHT-GRAY ">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">
        {/* TOP SECTION: Logo, Nav, Socials */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0 pb-6  mb-3 border-gray-700/50">
          {/* Logo/Brand Name (Placeholder) */}
          <div className="flex items-center text-3xl font-extrabold tracking-tight">
            {/* Simple Logo Placeholder (using an abstract shape) */}
            <svg className="w-8 h-8 mr-2 fill-GREEN" viewBox="0 0 24 24">
              <path d="M12 2L2 22h20L12 2zm0 14l-4 8h8l-4-8z" />
            </svg>
            AITHERAN
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <SocialIcon href="https://linkedin.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://twitter.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2 1.7-1.4 3.4-4 4.4-6.8 1.4-3.6 2.3-7.7 2.3-10.7z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://facebook.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* MIDDLE SECTION: Contact Info and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-3 text-sm">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col justify-end">
            <div className="p-3 rounded-xl flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 bg-DARK-PRIMARY">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-xl text-sm border-2 focus:outline-none bg-DARK-PRIMARY border-GREEN text-LIGHT-GRAY "
              />
              <button className=" w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-sm transition hover:opacity-90 bg-GREEN text-DARK-PRIMARY">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="text-gray-700/50" />
        {/* BOTTOM SECTION: Copyright */}
        <div className="flex justify-center text-sm ">
          <p>© {new Date().getFullYear()} Positivus. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
