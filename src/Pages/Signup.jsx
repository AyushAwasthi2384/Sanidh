"use client"
import Image from "next/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signing up with", { name, email, password });
        // Add signup logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 px-[6rem] bg-[#1f1f1f]">
            <div className="w-1/2 p-8 space-y-6 flex justify-between gap-[2rem] flex-col">
                <div>
                    <div className="text-[2rem] font-bold">
                        Lorem Ipsum
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum veniam impedit recusandae laborum voluptatibus vero quis temporibus nam? Doloremque, mollitia?
                    </div>
                </div>
                <div>
                    <Image src="/images/auth-bg.png" className="w-[65%]" alt="Logo" width={200} height={200} />
                </div>
            </div>
            <form onSubmit={handleSubmit} className="w-1/2 bg-white rounded-3xl shadow-md p-8 space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Signup</h2>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-[1rem]">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Enter your last name"
                            />
                        </div>
                    </div>
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
                        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                        <div className="w-full px-4 mt-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none flex items-center">
                            <Image src="/images/india-flag.png" alt="eye" width={20} height={20} />
                            <div className="text-gray-900 ml-2">
                                +91
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-2 py-2"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Enter your password"
                        />
                        <div className="text-gray-500 text-[.8rem]">
                            Use 8 or more characters with a mix of letters, numbers & symbols
                        </div>
                    </div>
                    <div className="text-gray-500 flex items-center gap-[1rem] justify-center">
                        <hr className="w-[30%] border" />
                        <div className="text-[1.5rem] text-gray-400">or</div>
                        <hr className="w-[30%] border" />
                    </div>
                    <div className="text-gray-500 flex items-center gap-[1rem] justify-center">
                        <FcGoogle />
                        Signup with Google
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 mt-6 text-white bg-green-600 rounded-full hover:bg-green-700 transition duration-200"
                >
                    Signup
                </button>
            </form>
        </div>
    );
}
