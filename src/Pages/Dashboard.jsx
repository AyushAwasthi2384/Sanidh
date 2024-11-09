import React, { useState } from 'react';
import DashMain from '../Components/DashMain'
import { IoIosArrowDown } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import Image from 'next/image.js';

const Dashboard = () => {
    const [curContent, setCurContent] = useState(0);
    return (
        <div className='h-[100vh] bg-[#1f1f1f]'>
            <div className="navbar flex fixed w-[15rem] h-full justify-between p-5 bg-white rounded-r-3xl pt-[3rem]">
                <div className='flex flex-col'>
                    <div className="flex items-center gap-[.5rem] text-gray-900 border-b py-4">
                        <Image src="/images/cat-user.jpg" className="w-[3rem] h-[3rem] object-cover rounded-full border-2 border-black" alt="Logo" width={200} height={200} />
                        <div>
                            Ayush Awasthi
                        </div>
                        <IoIosArrowDown size={20} />
                    </div>
                    <div className="main mt-4 ">
                        <div className='text-gray-400 text-[.8rem]'>MAIN</div>
                        <div className={`flex items-center cursor-pointer gap-[1rem] text-gray-900 rounded-lg p-4 w-full ${curContent === 0 ? "bg-gray-100" : ""}`}>
                            <RxDashboard size={20} />
                            Dashboard
                        </div>
                        <div className={`flex items-center cursor-pointer gap-[1rem] text-gray-900 rounded-lg p-4 w-full ${curContent === 1 ? "bg-gray-100" : ""}`}>
                            <IoDocumentTextOutline size={20} />
                            Sessions
                        </div>
                        <div className={`flex items-center cursor-pointer gap-[1rem] text-gray-900 rounded-lg p-4 w-full ${curContent === 2 ? "bg-gray-100" : ""}`}>
                            <IoWalletOutline size={20} />
                            Payments
                        </div>
                        <div className={`flex items-center cursor-pointer gap-[1rem] text-gray-900 rounded-lg p-4 w-full ${curContent === 3 ? "bg-gray-100" : ""}`}>
                            <GoBell size={20} />
                            Contact Us
                        </div>
                    </div>
                </div>
            </div>

            <div className="content ml-[16rem] h-full p-[1rem]">
                {curContent === 0 &&
                    <DashMain />
                }
            </div>
        </div>
    );
}

export default Dashboard;
