// import { useNavigate } from "react-router-dom";

export default function Home() {
    // const navigate = useNavigate();

    // const DARK_PRIMARY = '#191A23'; // Text/Color
    const LIGHT_GRAY = '#F3F3F3';   // Background Color

    return (
        <div className="min-h-screen flex flex-col items-center justify-center " style={{ backgroundColor: LIGHT_GRAY }} >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our App</h1>
            <p className="text-gray-600 mb-8 text-lg">
                This is a sample services built with React, Vite & TypeScript.
            </p>

            {/* <button
        onClick={() => navigate("/login")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition"
      >
        Login
      </button> */}
        </div>
    );
}
