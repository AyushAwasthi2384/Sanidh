import React from "react";
import { DiVim } from "react-icons/di";
import TopNavbar from "./TopNavbar";
import SessionCard from "./SessionCard";
import { FaClock, FaLock, FaUser } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

function PreviousSession() {
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

  return (
    <div className="h-full flex flex-col gap-[1rem]">
      <div>
        <TopNavbar route={"Previous Sessions"} userName={"Ayush Awasthi"} />
      </div>
      <div className={"flex flex-col gap-[1rem] w-full h-full"}>
        <div className="bg-white h-full rounded-3xl p-4 flex flex-col gap-[.5rem]">
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
          <div>
            <div className="cards flex flex-col gap-[.5rem]">
              {sessions.map((session, index) => {
                return (
                  <SessionCard key={index} index={index} session={session} />
                );
              })}
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default PreviousSession;
