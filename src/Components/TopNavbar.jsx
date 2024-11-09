import Image from 'next/image';
import React from 'react';
import { IoSearch } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

const TopNavbar = ({ route, userName }) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-[2rem] items-center'>
                <div className='text-[2rem] font-bold'>
                    {route}
                </div>
                <div className='search h-[2.5rem] rounded-xl w-[30rem] bg-white flex items-center gap-[1rem] px-[1rem]'>
                    <IoSearch size={25} />
                    <input className='w-full outline-none' type="text" placeholder="Search" />
                </div>
            </div>
            <div className='flex items-center gap-[1rem]'>
                <div className='flex items-center gap-[.5rem]'>
                    {userName}
                    <MdVerified size={20} color='#1678FB' />
                </div>

                <Image src="/images/cat-user.jpg" className="w-[3rem] h-[3rem] object-cover rounded-full border-2 border-black" alt="Logo" width={200} height={200} />
            </div>
        </div>
    );
}

export default TopNavbar;
