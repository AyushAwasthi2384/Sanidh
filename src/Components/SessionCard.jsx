import React, { useEffect, useRef, useState } from "react";
import { FcDocument } from "react-icons/fc";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdDownload } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function SessionCard({ session, index }) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const popoverRef = useRef(null);

    // Close popover on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                setIsPopoverOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [popoverRef]);

    return (
        <div
            key={index}
            className="w-full h-[5rem] border text-black border-[#DDDEE0] rounded-xl flex"
        >
            <div className="w-[40%] h-full text-[#40464C] flex items-center px-[1rem] gap-[1rem]">
                <div className="p-3 bg-gray-100 rounded-full">
                    <FcDocument size={30} />
                </div>
                <div>
                    <div className="font-bold">{session?.patientName}</div>
                    <div>{session?.email}</div>
                </div>
            </div>
            <div className="w-[30%] h-full text-[#40464C] flex items-center px-[1rem] gap-[1rem]">
                {session?.title}
            </div>
            <div className="w-[25%] h-full text-[#40464C] flex items-center justify-between px-[1rem] gap-[1rem]">
                {session?.createdAt}
                <button
                    className="cursor-pointer relative"
                    onClick={() => setIsPopoverOpen((pre) => !pre)}
                >
                    <HiDotsHorizontal
                        size={25}
                        ref={popoverRef}

                    // className="relative"
                    />
                    {isPopoverOpen && (
                        <div className="w-auto h-auto shadow-lg rounded-lg border bg-white z-10 absolute left-0 top-5 p-2 px-3 flex flex-col gap-2">
                            <button className="flex gap-2  items-center ">
                                <MdDelete size={"1.5rem"} className="text-red-500" />{" "}
                                <span className="text-md"> Delete</span>
                            </button>
                            <button className="flex gap-2 items-center ">
                                <IoMdDownload size={"1.5rem"} className="text-blue-500" />
                                <span className="text-md"> Download</span>
                            </button>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
}

export default SessionCard;
