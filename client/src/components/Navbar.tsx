import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "Services", path: "/#services" },
    { name: "About us", path: "/#aboutus" },
    { name: "Contact", path: "/#contact" },
  ];

  const DARK_PRIMARY = "#191A23";

  return (
    <nav className="p-4 sticky top-0 z-10 bg-white">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold transition duration-150"
          style={{ color: DARK_PRIMARY }}
        >
          <span className="mr-2">★</span> AITHERAN
        </Link>

        <div className="ml-auto flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                href={item.path}
                key={item.path}
                className="font-medium text-base hover:text-accent-green transition hover:underline duration-150"
                style={{ color: DARK_PRIMARY }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
