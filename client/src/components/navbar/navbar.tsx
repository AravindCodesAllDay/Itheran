import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navItems = [
        { name: "About us", path: "/aboutus" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
        { name: "Pricing", path: "/pricing" },
        { name: "Blog", path: "/blog" },
    ];

    const DARK_PRIMARY = "#191A23";

    const navigate = useNavigate();

    // Get token
    const userToken = localStorage.getItem("userToken");

    // Logout Function
    const handleLogout = () => {
        localStorage.removeItem("userToken");
        navigate("/"); // redirect home
        window.location.reload(); // re-render navbar
    };

    return (
        <nav className="p-4 sticky top-0 z-10 bg-white">
            <div className="max-w-7xl mx-auto flex items-center">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold transition duration-150"
                    style={{ color: DARK_PRIMARY }}
                >
                    <span className="mr-2">★</span> ITHERAN
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

                    {/* 🔥 CONDITIONAL AUTH BUTTON */}
                    {!userToken ? (
                        // SHOW LOGIN BUTTON WHEN NO TOKEN
                        <Link
                            to="/login"
                            className="px-6 py-3 border-2 rounded-lg text-sm font-medium transition duration-150 hover:bg-gray-50"
                            style={{
                                borderColor: DARK_PRIMARY,
                                color: DARK_PRIMARY,
                            }}
                        >
                            Login
                        </Link>
                    ) : (
                        // SHOW LOGOUT BUTTON WHEN TOKEN EXISTS
                        <button
                            onClick={handleLogout}
                            className="px-6 py-3 border-2 rounded-lg text-sm font-medium transition duration-150 hover:bg-gray-50"
                            style={{
                                borderColor: DARK_PRIMARY,
                                color: DARK_PRIMARY,
                            }}
                        >
                            Logout
                        </button>
                    )}

                </div>
            </div>
        </nav>
    );
}
