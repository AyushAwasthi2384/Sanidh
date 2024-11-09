"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import TopNavbar from "./TopNavbar";
import Image from "next/image";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { FaUser, FaLock, FaClock } from "react-icons/fa";
import SessionCard from "./SessionCard";
import { IoIosArrowForward } from "react-icons/io";
// import { Line, LineChart } from 'recharts';
import { GoDotFill } from "react-icons/go";
const BPChart = dynamic(() => import("../components/BPChart"), { ssr: false });
import { BsArrowUpRightCircleFill } from "react-icons/bs";

function DashMain() {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedSession, setSelectedSession] = useState();
    // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    // const data = [
    //     { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    //     { name: 'Page B', uv: 300, pv: 1398, amt: 2210 },
    //     { name: 'Page C', uv: 200, pv: 9800, amt: 2290 },
    //     { name: 'Page D', uv: 278, pv: 3908, amt: 2000 },
    //     { name: 'Page E', uv: 189, pv: 4800, amt: 2181 },
    //     { name: 'Page F', uv: 239, pv: 3800, amt: 2500 },
    //     { name: 'Page G', uv: 349, pv: 4300, amt: 2100 },
    // ];

    const bpdata = [
        { date: "2024-11-01", systolic: 120, diastolic: 80 },
        { date: "2024-11-02", systolic: 118, diastolic: 82 },
        { date: "2024-11-03", systolic: 125, diastolic: 85 },
        { date: "2024-11-04", systolic: 130, diastolic: 88 },
        { date: "2024-11-05", systolic: 128, diastolic: 83 },
        { date: "2024-11-06", systolic: 135, diastolic: 90 },
        { date: "2024-11-07", systolic: 132, diastolic: 87 },
    ];

    const sessions = [
        {
            _id: 1,
            title: "Session 1",
            patientName: "Ayush Awasthi",
            email: "ayush2384@gmail.com",
            createdAt: "2024-11-09",
            report: "The report was normal.",
        },
        {
            _id: 2,
            title: "Session 2",
            patientName: "Shivansh Srivastava",
            email: "shivanshwa@gmail.com",
            createdAt: "2024-11-09",
            report: "The report was normal.",
        },
        {
            _id: 3,
            title: "Session 3",
            patientName: "Ayush Awasthi",
            email: "ayushawasthi2384@gmail.com",
            createdAt: "2024-11-09",
            report: "The report was normal.",
        },
    ];

    const curUser = {
        name: "Ayush Awasthi",
        email: "ayush2384@gmail.com",
        role: "Patient",
        gender: "male",
        dob: "2004-08-23",
        phone: "8303996674",
        location: "Lucknow, Uttar Pradesh",
    };

    return (
        <div className="h-full flex flex-col gap-[1rem]">
            <div>
                <TopNavbar route={"Overview"} userName={"Ayush Awasthi"} />
            </div>
            <div className="flex gap-[1rem] h-[35%]">
                <div className="bg-white rounded-3xl flex gap-[1rem] w-3/4 p-4">
                    <div className="w-[40%] rounded-2xl h-full overflow-hidden border">
                        <Image
                            src="/images/test-img.png"
                            className="w-full h-full object-cover"
                            alt="Logo"
                            width={1800}
                            height={700}
                        />
                    </div>
                    <div className="border-l p-2 px-5 flex flex-col justify-around">
                        <div className="text-[1.3rem] flex items-center gap-[.5rem] font-bold ">
                            {curUser.name}
                            <span className="bg-[#1678FB] text-[.7rem] px-3 py-[2px] rounded-full text-white">
                                Active
                            </span>
                        </div>
                        <div className="flex gap-[1rem]">
                            <div>
                                <div className="text-[.7rem] text-gray-500">Gender</div>
                                <div className="text-[.8rem]">{curUser?.gender}</div>
                            </div>
                            <div>
                                <div className="text-[.7rem] text-gray-500">Birthday</div>
                                <div className="text-[.8rem]">{curUser?.dob}</div>
                            </div>
                        </div>
                        <div className="flex gap-[1rem]">
                            <div>
                                <div className="text-[.7rem] text-gray-500">Phone Number</div>
                                <div className="text-[.8rem]">{curUser?.phone}</div>
                            </div>
                            <div>
                                <div className="text-[.7rem] text-gray-500">Email</div>
                                <div className="text-[.8rem]">{curUser?.email}</div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="text-[.7rem] text-gray-500">Location</div>
                                <div className="text-[.8rem]">{curUser?.location}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-3xl p-3 w-3/4 flex flex-col gap-[5px]">
                    <div className="flex justify-between px-4">
                        <div className="font-bold py-2">Health Records</div>
                        <div className="flex">
                            <div className="flex items-center text-[.7rem]">
                                <GoDotFill color="#8884d8" /> Blood Pressure Systolic
                            </div>
                            <div className="flex items-center text-[.7rem]">
                                <GoDotFill color="#55545d" /> Blood Pressure Diastolic
                            </div>
                        </div>
                    </div>
                    <BPChart bpdata={bpdata} />
                </div>
                {/* <div className='flex flex-col gap-[1rem] rounded-3xl w-1/4'>
                    <div className='bg-white h-2/3 rounded-3xl w-full'></div>
                    <div className='bg-white h-1/3 rounded-3xl w-full'></div>
                </div> */}
                <div className="flex flex-col gap-[1rem] rounded-3xl w-1/4">
                    <div className="text-left bg-white h-2/3 rounded-3xl w-full ">
                        <div className="bg-white p-6 rounded-3xl text-center">
                            <div className="flex justify-left rounded-3xl items-baseline">
                                <div className="flex justify-left items-baseline space-x-1 ">
                                    <div
                                        className="text-6xl font-bold text-blue-500"
                                        style={{ fontSize: "4.1rem" }}
                                    >
                                        1
                                    </div>
                                    <div className="text-6xl font-bold text-gray-500">/</div>
                                    <div className="text-6xl font-bold text-gray-500">3</div>
                                </div>
                                .
                            </div>
                            <div
                                className="mt-4 text-base font-medium whitespace-nowrap flex justify-left"
                                style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                            >
                                Free Sessions Has Been Used
                            </div>
                        </div>
                    </div>

                    {/* <div className='bg-white h-1/3 rounded-3xl w-full'>  */}
                    <div className="flex items-center justify-center rounded-3xl h-1/3 bg-blue-100">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-3xl w-full px-4 "
                            padding-left="10px"
                        >
                            <div className="text-left ml-3">
                                <div className="text-0xl">Start A</div>

                                <div className="item-top flex justify-between">
                                    <div className="text-2xl font-bold">New Session</div>
                                    <div className="flex justify-between padding: 10px 20px vertical-align: middle justify-content: space-between">
                                        <BsArrowUpRightCircleFill size={35} />
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                    {/* </div> */}
                </div>
            </div>
            <div className="flex gap-[1rem] h-[65%]">
                <div className={"flex flex-col gap-[1rem] w-[70%]"}>
                    <div className="bg-yellow-300 h-[30%] rounded-3xl relative">
                        <Image
                            src="/images/premium-bg.png"
                            className="z-10 w-full h-full absolute object-cover rounded-3xl"
                            alt="Logo"
                            width={1800}
                            height={700}
                        />
                        <Image
                            src="/images/doctor-img.png"
                            className="z-10 h-[120%] object-contain absolute right-[-10rem] bottom-0"
                            alt="Logo"
                            width={1800}
                            height={700}
                        />
                        <div className="z-20 absolute p-5 flex justify-between w-full items-center">
                            <div>
                                <div className="font-bold text-[1.5rem]">
                                    Upgrade your account to PRO+
                                </div>
                                <div className="w-[70%]">
                                    with pro+ account you get many additional and convenient
                                    features to extra sessions.
                                </div>
                            </div>
                            <div className="p-3 bg-gray-100 rounded-full cursor-pointer">
                                <IoIosArrowForward size={40} color="black" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white h-[70%] rounded-3xl p-4 flex flex-col gap-[.5rem]">
                        <div className="flex justify-between items-center px-2">
                            <div className="font-bold">Previous Sessions</div>
                            <button className="text-[#1678FB]">See all</button>
                        </div>
                        <div className="w-full h-[3rem] border border-[#DDDEE0] rounded-xl flex bg-[#F2F6FE]">
                            {/* <div className='w-[5%] h-full flex items-center justify-center'>
                                <div onClick={() => setSelectAll(!selectAll)} className='cursor-pointer'>
                                    {selectAll ? <ImCheckboxChecked size={20} color='#40464C' /> :
                                        <ImCheckboxUnchecked size={20} color='#40464C' />}
                                </div>
                            </div> */}
                            <div className="w-[40%] h-full text-[#40464C] flex items-center px-[1rem] gap-[1rem]">
                                <FaUser /> Patient Name
                            </div>
                            <div className="w-[30%] h-full text-[#40464C] flex items-center px-[1rem] gap-[1rem]">
                                <FaLock /> Session Title
                            </div>
                            <div className="w-[25%] h-full text-[#40464C] flex items-center px-[1rem] gap-[1rem]">
                                <FaClock /> Time of Session
                            </div>
                        </div>
                        <div className="overflow-y-scroll h-[12rem]">
                            <div className="cards flex flex-col gap-[.5rem]">
                                {sessions.map((session, index) => {
                                    return (
                                        <SessionCard key={index} index={index} session={session} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-3xl w-[30%] p-4">
                    <div className="p-2 pb-4 flex justify-between items-center">
                        <div className="font-bold">Health Records</div>
                        <div className="flex">
                            <select
                                name=""
                                id=""
                                className="text-[#1678FB]"
                                onChange={(e) => setSelectedSession(e.target.value)}
                            >
                                {sessions.map((session, index) => {
                                    return (
                                        <option key={index} value={session}>
                                            {session?.title}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="p-3 bg-[#F2F6FE] h-[88%] rounded-2xl">
                        {selectedSession?.report}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashMain;
