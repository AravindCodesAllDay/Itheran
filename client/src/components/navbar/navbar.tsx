import { Link } from "react-router-dom";

export default function Navbar() {
    const navItems = [
        { name: "About us", path: "/aboutus" },
        { name: "Services", path: "/services" },
        { name: "Use Cases", path: "/usecases" },
        { name: "Pricing", path: "/pricing" },
        { name: "Blog", path: "/blog" },
    ];

    // --- Custom Color Fallbacks ---
    const DARK_PRIMARY = '#191A23'; // Text/Color
    // const LIGHT_GRAY = '#F3F3F3';   // Background Color

    return (
        <nav className="p-4 sticky top-0 z-10" >
            <div className="max-w-7xl mx-auto flex items-center">

                {/* Left Side — Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold transition duration-150"
                    style={{ color: DARK_PRIMARY }}
                >
                    <span className="mr-2">★</span> Itheran
                </Link>

               
                <div className="ml-auto flex items-center space-x-8">

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="font-medium text-base hover:text-accent-green transition duration-150"
                                style={{ color: DARK_PRIMARY }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button
                        className="px-6 py-3 border-2 rounded-lg text-sm font-medium transition duration-150 hover:bg-gray-50"
                        style={{
                            borderColor: DARK_PRIMARY,
                            color: DARK_PRIMARY,
                        }}
                        onClick={() => console.log("Navigate to Quote Form")}
                    >
                        Request a quote
                    </button>

                </div>
            </div>
        </nav>
    );

}