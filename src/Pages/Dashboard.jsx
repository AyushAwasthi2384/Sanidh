import React, { useState } from "react";
import DashMain from "../Components/DashMain";
import { IoIosArrowDown } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import Image from "next/image.js";
import SessionMain from "../Components/SessionMain";
import SessionStart from "../Components/SessionStart";
import PreviousSession from "../Components/PreviousSession";

const Dashboard = () => {
  const [curContent, setCurContent] = useState(0);
  const [sCount, setSCount] = useState(0);
  const [patientData, setPatientData] = useState({});

  return (
    <div className="h-[100vh] bg-[#D2E9FE] text-black">
      <div className="navbar flex fixed w-[6rem] h-full justify-between p-5 bg-white rounded-r-3xl pt-[3rem]">
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-[.5rem] text-gray-900 border-b py-4">
            <Image
              src="/images/logo.png"
              className="w-[4rem] h-[4rem] object-cover rounded-full"
              alt="Logo"
              width={200}
              height={200}
            />

            {/* <IoIosArrowDown size={20} /> */}
          </div>
          <div className="main mt-4">
            <div className="text-gray-400 text-[.8rem] mb-2 text-center">
              MAIN
            </div>
            <div
              className={`flex items-center cursor-pointer gap-[1rem] text-gray-900 rounded-lg p-4 w-full ${
                curContent === 0 ? "bg-yellow-300" : ""
              }`}
              onClick={() => setCurContent(0)}
            >
              <RxDashboard size={20} />
              {/* Dashboard */}
            </div>
            <div
              className={`flex items-center cursor-pointer gap-[1rem] text-gray-900 rounded-lg p-4 w-full ${
                curContent === 1 ? "bg-yellow-300" : ""
              }`}
              onClick={() => {
                sCount < 4 && setCurContent(1);
              }}
            >
              <IoDocumentTextOutline size={20} />
              {/* Sessions */}
            </div>
            <div
              className={`flex items-center cursor-pointer gap-[1rem] text-gray-900 rounded-lg p-4 w-full ${
                curContent === 2 ? "bg-yellow-300" : ""
              }`}
              onClick={() => setCurContent(2)}
            >
              <IoWalletOutline size={20} />
              {/* Payments */}
            </div>
            <div
              className={`flex items-center cursor-pointer gap-[1rem] text-gray-900 rounded-lg p-4 w-full ${
                curContent === 3 ? "bg-yellow-300" : ""
              }`}
              onClick={() => setCurContent(3)}
            >
              <GoBell size={20} />
              {/* Contact Us */}
            </div>
          </div>
        </div>
      </div>

      <div className="content ml-[6rem] h-full p-[1rem]">
        {curContent === 0 && (
          <DashMain
            curContent={curContent}
            setCurContent={setCurContent}
            setSCount={setSCount}
          />
        )}
        {curContent === 1 && (
          <SessionStart curContent={curContent} setCurContent={setCurContent} setPatientData={setPatientData} />
        )}
        {curContent === 2 && <PreviousSession />}
        {curContent === 11 && <SessionMain patientData={patientData}/>}
      </div>
    </div>
  );
};

export default Dashboard;
