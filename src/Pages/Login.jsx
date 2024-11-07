
"use client";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with", { email, password });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Enter your password"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 mt-6 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
