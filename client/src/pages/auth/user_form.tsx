import React, { useState } from "react";

interface FormData {
    username?: string;
    email: string;
    password: string;
}

const API_BASE = (import.meta as any).env.VITE_API;
const API_BASE_URL = API_BASE
    ? `${API_BASE}/api/users`
    : "http://localhost:3030/api/users";

const AuthForm: React.FC = () => {
    const DARK_PRIMARY = "#191A23";
    const LIGHT_GRAY = "#F3F3F3";
    const GREEN_ACCENT = "#B9FF66";

    const [isLoginView, setIsLoginView] = useState(true);
    const [formData, setFormData] = useState<FormData>({
        username: "",
        email: "",
        password: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const title = isLoginView ? "Welcome Back" : "Create Account";
    const buttonText = isLoginView ? "Login" : "Register";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSuccess = (token: string, username: string) => {
        localStorage.setItem("userToken", token);

        setSuccessMessage(
            `${username}, you have successfully ${isLoginView ? "logged in" : "registered"}!`
        );
        setError(null);
        setIsLoading(false);

        if (!isLoginView) {
            setTimeout(() => {
                setIsLoginView(true);
                setFormData({ email: "", password: "", username: "" });
            }, 1500);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setError(null);
        setSuccessMessage(null);
        setIsLoading(true);

        if (!formData.email || !formData.password || (!isLoginView && !formData.username)) {
            setError("Please fill out all required fields.");
            setIsLoading(false);
            return;
        }

        const endpoint = isLoginView
            ? `${API_BASE_URL}/login`
            : `${API_BASE_URL}/register`;

        const payload = isLoginView
            ? { email: formData.email, password: formData.password }
            : formData;

        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Authentication failed.");
                setIsLoading(false);
                return;
            }

            handleSuccess(data.token, data.user.username);
        } catch (err) {
            setError("Unable to reach server. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const toggleView = () => {
        setIsLoginView(!isLoginView);
        setFormData({ email: "", password: "", username: "" });
        setError(null);
        setSuccessMessage(null);
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen px-6"
            style={{  }}
        >
            <div
                className="w-full max-w-md rounded-3xl p-10"
                style={{
                    backgroundColor: LIGHT_GRAY,
                    border: `2px solid ${DARK_PRIMARY}`,
                    boxShadow: `6px 6px 0 0 ${DARK_PRIMARY}`,
                }}
            >
                {/* Title */}
                <h2
                    className="text-center text-4xl font-bold rounded-xl px-4 py-2 mb-6"
                    style={{ backgroundColor: GREEN_ACCENT, color: DARK_PRIMARY }}
                >
                    {title}
                </h2>

                {/* Success */}
                {successMessage && (
                    <div className="p-3 mb-4 rounded-lg text-green-800 bg-green-200 border border-green-600">
                        {successMessage}
                    </div>
                )}

                {/* Error */}
                {error && (
                    <div className="p-3 mb-4 rounded-lg text-red-800 bg-red-200 border border-red-600">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Username */}
                    {!isLoginView && (
                        <div>
                            <label className="block text-sm font-medium" style={{ color: DARK_PRIMARY }}>
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                                className="mt-1 w-full px-4 py-3 rounded-xl border-2 outline-none"
                                style={{
                                    borderColor: DARK_PRIMARY,
                                    backgroundColor: "white",
                                }}
                            />
                        </div>
                    )}

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium" style={{ color: DARK_PRIMARY }}>
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            disabled={isLoading}
                            onChange={handleChange}
                            className="mt-1 w-full px-4 py-3 rounded-xl border-2 outline-none"
                            style={{
                                borderColor: DARK_PRIMARY,
                                backgroundColor: "white",
                            }}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium" style={{ color: DARK_PRIMARY }}>
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            disabled={isLoading}
                            className="mt-1 w-full px-4 py-3 rounded-xl border-2 outline-none"
                            style={{
                                borderColor: DARK_PRIMARY,
                                backgroundColor: "white",
                            }}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 rounded-xl text-lg font-semibold transition flex items-center justify-center"
                        style={{
                            backgroundColor: DARK_PRIMARY,
                            color: LIGHT_GRAY,
                        }}
                    >
                        {isLoading ? (
                            <div className="animate-spin h-6 w-6 border-4 border-t-transparent border-white rounded-full"></div>
                        ) : (
                            buttonText
                        )}
                    </button>
                </form>

                {/* Switch Auth View */}
                <p className="mt-6 text-center text-sm" style={{ color: DARK_PRIMARY }}>
                    {isLoginView ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                        type="button"
                        onClick={toggleView}
                        disabled={isLoading}
                        className="font-semibold underline"
                        style={{ color: DARK_PRIMARY }}
                    >
                        {isLoginView ? "Register here" : "Login here"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthForm;
