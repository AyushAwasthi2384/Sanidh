"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with", { email, password });
        // Add login logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 px-[6rem] bg-[#1f1f1f]">
            <div className="w-1/2 p-8 space-y-6 flex justify-between gap-[2rem] flex-col">
                <div>
                    <div className="text-[2rem] font-bold">
                        Welcome Back!
                    </div>
                    <div>
                        Login to continue to your account and access all our features.
                    </div>
                </div>
                <div>
                    <Image src="/images/auth-bg.png" className="w-[65%]" alt="Logo" width={200} height={200} />
                </div>
            </div>
            <form onSubmit={handleSubmit} className="w-1/2 bg-white rounded-3xl shadow-md p-[3rem] py-[2rem] space-y-6">
                <h2 className="text-3xl font-[500] text-gray-800">Login</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="w-full mt-2 pr-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none flex">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Enter your password"
                            />
                            <div className="flex items-center cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? (
                                    <div className="flex items-center gap-[5px] text-gray-500 text-sm">
                                        <FaEyeSlash size={20} className="text-gray-500" />
                                        <span>Hide</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-[5px] text-gray-500 text-sm">
                                        <FaEye size={20} className="text-gray-500" />
                                        <span>Show</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="text- flex items-center gap-[1rem] justify-between">
                        <div className="text-gray-900 flex items-center gap-[1rem]">
                            <input type="checkbox" name="" id="" />
                            <div>Remember Me</div>
                        </div>
                        <Link href="/forgot-password" className="text-blue-600 text-sm w-[max-content]">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="text-gray-500 flex items-center gap-[1rem] justify-center">
                        <hr className="w-[30%] border" />
                        <div className="text-[1.5rem] text-gray-400">or</div>
                        <hr className="w-[30%] border" />
                    </div>
                    <div className="text-gray-500 flex border border-black mx-auto rounded-full p-2 items-center gap-[1rem] justify-center">
                        <FcGoogle size={35} />
                        <div className="font-bold">
                            Continue with Google
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full py-2 mt-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                    <div className="text-center text-gray-900 mt-1">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-blue-600">
                            Signup
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
