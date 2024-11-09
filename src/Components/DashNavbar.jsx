import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";


const DashNavbar = (curContent, setCurContent) => {

    const [isOpen, setIsOpen] = useState(curContent);

    return (
        <div className="flex fixed w-[5rem] h-full justify-between p-5 bg-white rounded-r-3xl pt-[3rem]">
            <div className='flex flex-col'>
                <div className="flex items-center gap-[.5rem] text-gray-900 border-b py-4">
                    <Image src="/images/cat-user.jpg" className="w-[3rem] h-[3rem] rounded-full border-2 border-black" alt="Logo" width={200} height={200} />
                    <div>
                        Ayush Awasthi
                    </div>
                        <IoIosArrowDown size={20} />
                </div>
                <div className="main mt-4 ">
                    <div className='text-gray-400 text-[.8rem]'>MAIN</div>
                    <div className={`flex items-center cursor-pointer gap-[1rem] text-gray-900 rounded-lg p-4 w-full ${isOpen === 0 ? "bg-gray-100" : ""}`}>
                        <RxDashboard size={20} />
                        {/* Dashboard */}
                    </div>
                    <div className={`flex items-center cursor-pointer gap-[1rem] text-gray-900 rounded-lg p-4 w-full ${isOpen === 1 ? "bg-gray-100" : ""}`}>
                        <IoDocumentTextOutline size={20} />
                        {/* Sessions */}
                    </div>
                    <div className={`flex items-center cursor-pointer gap-[1rem] text-gray-900 rounded-lg p-4 w-full ${isOpen === 2 ? "bg-gray-100" : ""}`}>
                        <IoWalletOutline size={20} />
                        {/* Payments */}
                    </div>
                    <div className={`flex items-center cursor-pointer gap-[1rem] text-gray-900 rounded-lg p-4 w-full ${isOpen === 3 ? "bg-gray-100" : ""}`}>
                        <GoBell size={20} />
                        {/* Contact Us */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashNavbar;
