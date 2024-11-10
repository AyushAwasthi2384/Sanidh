import React from "react";
import PropTypes from "prop-types";
import TopNavbar from "./TopNavbar";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

const SessionMain = () => {
  return (
    <div className="h-full flex flex-col gap-[1rem]">
      <div>
        <TopNavbar route={"Session"} userName={"Ayush Awasthi"} />
      </div>
      <div className="flex gap-[1rem] items-center h-full bg-white rounded-3xl">
        {/* <div
          className=" flex flex-col  gap-[3rem] "
          style={{ width: "100%", textAlign: "center" }}
        >
          <div className="flex flex-col gap-[0rem]">
            <div className="w-92% flex mb-[-1rem] justify-center">
              <img src="/images/logo.png" alt="logo" height={200} width={200} />
            </div>
            <div>
              <h2
                className="flex items-center justify-center h-10 "
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  padding: "1px",
                }}
              >
                Start your session with Sanidh
              </h2>
              <h4 className="flex items-center justify-center h-10 ">
                Hi there! 👋 I'm SANIDH, your AI medical assistant, here to
                provide you with quick, reliable health information and
                <br /> support. Let's take a step toward better health together!
                😊
              </h4>
            </div>
          </div>
          <div className="container  ">
            <div
              className=" rounded-3xl w-[50%] h-[7rem] p-4 px-5 mx-auto flex justify-between items-center"
              style={{
                backgroundImage: `url('/images/sessionmain.png')`,
              }}
            >
              <div
                className="font-bold text-[1.3rem]"
                style={{ padding: "15px" }}
              >
                Upload Your First Document
              </div>

              <div className="flex flex-col gap-3  ">
                <button
                  type="button"
                  className="h-10 p-3 px-4 flex gap-3 items-center justify-center border bg-[#5271FF] rounded-full text-white"
                >
                  Upload Report
                </button>

                <button
                  type="button"
                  className="h-10 p-3 px-4 flex items-center justify-center border-2 border-gray-300 rounded-full text-[#5271FF]"
                >
                  skip
                </button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="w-full min-h-24  px-16  ">
          <UserChat
            message={
              " giving the ofx in the various way to  response to the system goes to the various team name allowed o the fox generated the meaage to tgo the to pibn tet"
            }
          />
          <AIResponse
            message={
              " giving the ofx in the various way to  response to the system goes to the various team name allowed o the fox generated the meaage to tgo the to pibn tet"
            }
          />
        </div>
        <div className="w-[92%] flex justify-center fixed  bottom-[2rem] mx-auto">
          <div className="w-full flex justify-center  ">
            <div className="flex border w-1/2 rounded-full border-gray-200 bg-[#F2F6FE] h-[3.5rem] px-1 items-center gap-1 justify-between">
              <button
                type="button"
                className="h-[3rem] w-[3rem] rounded-full text-white bg-[#5271FF] text-5xl flex justify-center items-center"
              >
                {" "}
                +
              </button>
              <input
                type=" text"
                className="w-[80%] bg-[#F2F6FE] outline-none focus:shadow-sm h-full  "
              />
              <button
                type="button"
                className="h-[3rem] w-[3rem] rounded-full text-white bg-[#5271FF] text-5xl flex justify-center items-center"
              >
                {" "}
                <FaLocationArrow size="1.5rem" />
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
export default SessionMain;

const UserChat = ({ message }) => {
  return (
    <div className="flex flex-row-reverse gap-2 my-[1rem]">
      <div
        className="w-10 h-10 bg-gray-300 rounded-full object-cover object-center border border-gray-500 "
        style={{
          backgroundImage: `url('/images/india-flag.png')`,
        }}
      ></div>
      <div className=" p-2 px-4 rounded-2xl bg-[#F2F6FE] max-w-[60%]">
        {message}
      </div>
    </div>
  );
};
const AIResponse = ({ message }) => {
  return (
    <div className="flex gap-2 px-16 my-[1rem]">
      <div
        className="w-10 h-10 bg-[#CDE8F6] ] rounded-full object-cover object-center border border-gray-500 overflow-hidden "
        // style={{
        //   backgroundImage: `url('/images/logo.png')`,
        // }}
      >
        <img src="images/logo.png" alt="logo" width={80} height={80} />
      </div>
      <div className=" p-2 px-3 rounded-2xl bg-[#CDE8F6] max-w-[60%]">
        {message}
      </div>
    </div>
  );
};
