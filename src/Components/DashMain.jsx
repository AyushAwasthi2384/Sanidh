import React, { useState } from 'react';
import TopNavbar from './TopNavbar';
import Image from 'next/image';
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { FaUser, FaLock, FaClock } from "react-icons/fa";
import SessionCard from './SessionCard';
// import { BsArrowUpRightCircle } from "react-icons/bs";
import { BsArrowUpRightCircleFill } from "react-icons/bs";


function DashMain() {

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
            <div className='min-h-[7%]'>
                <TopNavbar route={"Overview"} userName={"Ayush Awasthi"} />
            </div>
            <div className='flex gap-[1rem] min-h-[35%]'>
                <div className='bg-white rounded-3xl w-3/4'></div>
                <div className='bg-white rounded-3xl w-3/4'></div>
                <div className='flex flex-col gap-[1rem] rounded-3xl w-1/4'>
                    <div className='text-left bg-white h-2/3 rounded-3xl w-full '>
                        <div className="bg-white p-6 rounded-3xl text-center">
                            <div className="flex justify-left rounded-3xl items-baseline" >
                            <div className="flex justify-left items-baseline space-x-1 ">
                                <div className="text-6xl font-bold text-blue-500" style={{ fontSize: '4.1rem'}}>1</div>
                                <div className="text-6xl font-bold text-gray-500">/</div>
                                <div className="text-6xl font-bold text-gray-500">3</div>
                            </div>.
                            </div>
                            <div className="mt-4 text-base font-medium whitespace-nowrap flex justify-left" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Free Sessions Has Been Used</div>
                        </div>
                    </div>


                    {/* <div className='bg-white h-1/3 rounded-3xl w-full'>  */}
                    <div className="flex items-center justify-center h-screen bg-blue-100">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-2xl w-full px-4 " padding-left= "10px">
                        <div className="text-left ml-3">
                            <div className="text-0xl">Start  A</div>
                            
                        <div className="item-top flex justify-between">
                        <div className="text-2xl font-bold">New Session</div>
                        <div className="flex justify-between padding: 10px 20px vertical-align: middle justify-content: space-between">
                        <BsArrowUpRightCircleFill size={35}/>
                        </div>
                        </div>
                        </div>
                            
                        </button>
                    </div>
                    {/* </div> */}



                </div>
            </div>
            <div className='flex gap-[1rem] min-h-[55%]'>
                <div className={'flex flex-col gap-[1rem] w-[70%]'}>
                    <div className='bg-yellow-300 h-[35%] rounded-3xl'>
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
                {/* <div className="w-80 p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-center min-h-max bg-blue-100">
                <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-black">User Reports</h2>
                </div>
                </div>
                </div> */}


                </div>
            </div>
        </div>
    );
};

export default DashMain;

