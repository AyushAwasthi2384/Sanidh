import React from 'react';
import { FcDocument } from "react-icons/fc";
import { HiDotsHorizontal } from "react-icons/hi";


function SessionCard({ session, index }) {
    return (
        <div key={index} className="w-full h-[5rem] border text-black border-[#DDDEE0] rounded-xl flex">
            <div className='w-[40%] h-full text-[#40464C] flex items-center px-[1rem] gap-[1rem]'>
                <div className='p-3 bg-gray-100 rounded-full'>
                    <FcDocument size={30} />
                </div>
                <div>
                    <div className='font-bold'>{session?.patientName}</div>
                    <div>{session?.email}</div>
                </div>
            </div>
            <div className='w-[30%] h-full text-[#40464C] flex items-center px-[1rem] gap-[1rem]'>{session?.title}</div>
            <div className='w-[25%] h-full text-[#40464C] flex items-center justify-between px-[1rem] gap-[1rem]'>
                {session?.createdAt}
                <div className='cursor-pointer'>
                    <HiDotsHorizontal size={25} />
                </div>
            </div>
        </div>
    );
};


export default SessionCard;
