import React, { useState } from 'react';
import TopNavbar from './TopNavbar';
import Image from 'next/image';
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { FaUser, FaLock, FaClock } from "react-icons/fa";
import SessionCard from './SessionCard';

function DashMain() {
    const [selectAll, setSelectAll] = useState(false);

    const sessions = [
        {
            _id: 1,
            title: "Session 1",
            patientName: "Ayush Awasthi",
            email: "ayush2384@gmail.com",
            createdAt: "2024-11-09"
        },
        {
            _id: 2,
            title: "Session 2",
            patientName: "Shivansh Srivastava",
            email: "shivanshwa@gmail.com",
            createdAt: "2024-11-09"
        },
        {
            _id: 3,
            title: "Session 3",
            patientName: "Ayush Awasthi",
            email: "ayushawasthi2384@gmail.com",
            createdAt: "2024-11-09"
        }
    ];

    return (
        <div className='h-full flex flex-col gap-[1rem]'>
            <div>
                <TopNavbar route={"Overview"} userName={"Ayush Awasthi"} />
            </div>
            <div className='flex gap-[1rem] h-[35%]'>
                <div className='bg-white rounded-3xl w-3/4'></div>
                <div className='bg-white rounded-3xl w-3/4'></div>
                <div className='flex flex-col gap-[1rem] rounded-3xl w-1/4'>
                    <div className='bg-white h-2/3 rounded-3xl w-full'></div>
                    <div className='bg-white h-1/3 rounded-3xl w-full'></div>
                </div>
            </div>
            <div className='flex gap-[1rem] h-[65%]'>
                <div className={'flex flex-col gap-[1rem] w-[70%]'}>
                    <div className='bg-yellow-300 h-[30%] rounded-3xl'>
                        <Image src="/images/premium-bg.png" className="w-full h-full" alt="Logo" width={1800} height={700} />
                    </div>
                    <div className='bg-white h-[70%] rounded-3xl p-4 flex flex-col gap-[.5rem]'>
                        <div className='flex justify-between items-center px-2'>
                            <div className='font-bold'>Previous Sessions</div>
                            <button className='text-[#1678FB]'>See all</button>
                        </div>
                        <div className="w-full h-[3rem] border border-[#DDDEE0] rounded-xl flex bg-[#F2F6FE]">
                            {/* <div className='w-[5%] h-full flex items-center justify-center'>
                                <div onClick={() => setSelectAll(!selectAll)} className='cursor-pointer'>
                                    {selectAll ? <ImCheckboxChecked size={20} color='#40464C' /> :
                                        <ImCheckboxUnchecked size={20} color='#40464C' />}
                                </div>
                            </div> */}
                            <div className='w-[40%] h-full text-[#40464C] flex items-center px-[1rem] gap-[1rem]'><FaUser /> Patient Name</div>
                            <div className='w-[30%] h-full text-[#40464C] flex items-center px-[1rem] gap-[1rem]'><FaLock /> Session Title</div>
                            <div className='w-[25%] h-full text-[#40464C] flex items-center px-[1rem] gap-[1rem]'><FaClock /> Time of Session</div>
                        </div>
                        <div className='overflow-scroll h-[12rem]'>
                            <div className="cards flex flex-col gap-[.5rem]">
                                {sessions.map((session, index) => {
                                    return (
                                        <SessionCard key={index} index={index} session={session} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-3xl w-[30%]'>

                </div>
            </div>
        </div>
    );
};

export default DashMain;

