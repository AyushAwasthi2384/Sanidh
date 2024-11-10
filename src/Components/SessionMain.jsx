import React, { useState } from "react";
import PropTypes from "prop-types";
import TopNavbar from "./TopNavbar";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

const SessionMain = () => {

    const reportData =
    {
        "patient_info": {
            "name": "Ayush Awasthi",
            "gender": "Male",
            "age": 20,
            "ref_by": "Dr. Subhash Mishra",
            "collection_date": "29/09/2024, 4:27:17 PM",
            "report_date": "15/09/2024, 2:15:42 PM",
            "report_status": "Final",
            "collection_centre": "Charak Diagnostics, Chowk, Lucknow Uttar Pradesh"
        },
        "test_results": {
            "OGTT (Hexokinase)": {
                "fasting_glucose": {
                    "value": 80.00,
                    "unit": "mg/dL",
                    "range": "70-100 mg/dL"
                },
                "2hrs_post_load_glucose": {
                    "value": 79.00,
                    "unit": "mg/dL",
                    "range": "70-140 mg/dL"
                }
            }
        },
        "interpretation": {
            "normal": {
                "fasting_plasma_glucose": "70-100 mg/dL",
                "post_75g_glucose_load": "70-140 mg/dL"
            },
            "impaired_fasting_glucose": {
                "fasting_plasma_glucose": "101-125 mg/dL",
                "post_75g_glucose_load": "70-140 mg/dL"
            },
            "impaired_glucose_tolerance": {
                "fasting_plasma_glucose": "70-100 mg/dL",
                "post_75g_glucose_load": "141-199 mg/dL"
            },
            "pre_diabetes": {
                "fasting_plasma_glucose": "101-125 mg/dL",
                "post_75g_glucose_load": "141-199 mg/dL"
            },
            "diabetes_mellitus": {
                "fasting_plasma_glucose": ">126 mg/dL",
                "post_75g_glucose_load": ">200 mg/dL"
            },
            "note": "The diagnosis of Diabetes requires: A fasting plasma glucose of ≥126 mg/dL or A random/2-hour post-glucose value of ≥200 mg/dL on at least 2 occasions."
        },
        "doctor_analysis": {
            "doctors": [
                "Dr. Himangshu Mazumdar (Senior Consultant - Clinical Chemistry & Biochemical Genetics)",
                "Dr. Kamal Modi (Consultant Biochemist)",
                "Dr. Nimmi Kansal (National Head - Clinical Chemistry & Biochemical Genetics)"
            ]
        },
        "important_instructions": [
            "Test results depend on the sample's quality and should be clinically correlated.",
            "Certain tests may need additional testing at extra cost.",
            "Test results are not valid for medico-legal purposes.",
            "For queries, contact customer care at +91-11-39885050."
        ]
    };


    const [file, setFile] = useState(null);
    const [text, setText] = useState('');
    const [start, setStart] = useState(false);

    // Handle file upload
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = () => {
        e.preventDefault();
        alert("File uploaded successfully!");
    }

    return (
        <div className="h-full flex flex-col gap-[1rem]">
            <div>
                <TopNavbar route={"Session"} userName={"Ayush Awasthi"} />
            </div>
            <div className="flex gap-[1rem] items-center h-full bg-white rounded-3xl">
                <div
                    className=" flex flex-col  gap-[3rem] "
                    style={{ width: "100%", textAlign: "center" }}
                >
                    <div className="flex flex-col gap-[0rem]">
                        <div className="w-92% flex mb-[-2rem] justify-center">
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
                    {/* <div className={'flex flex-col gap-[1rem] w-[70%]'}>
                    <div className='bg-yellow-300 h-[30%] rounded-3xl relative'>
                        <Image src="/images/Frame 2609065.png" className="z-10 w-full h-full absolute object-cover rounded-3xl" alt="Logo" width={1800} height={700} />
                    </div>
                </div> */}
                    <div className="container  ">
                        <div
                            className=" rounded-3xl w-[50%] h-[7rem] p-4 px-5 mx-auto flex justify-between items-center"
                            style={{
                                backgroundImage: `url('/images/sessionmain.png')`,
                            }}
                        >
                            {/* <Image
                src="/images/sessionmain.png"
                className="absolute w-full h-full object-cover rounded-3xl"
                alt="Logo"
                width={1800}
                height={500}
              /> */}
                            <div
                                className="font-bold text-[1.3rem]"
                                style={{ padding: "15px" }}
                            >
                                Upload Your First Document
                            </div>
                            {/* <div className='w-[70%]'>aaaa</div> */}

                            <form className="flex flex-col gap-3" method="post" action="/api/multer" encType="multipart/form-data">
                                <input type="file" name="fileUpload" id="" onChange={handleFileChange} />
                                <label
                                    // type="button"
                                    htmlFor="fileUpload"
                                    className="h-10 p-3 px-4 flex gap-3 cursor-pointer items-center justify-center border bg-[#5271FF] rounded-full text-white"
                                >
                                    Upload Report
                                </label>

                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="h-10 p-3 px-4 flex items-center justify-center border-2 border-gray-300 rounded-full text-[#5271FF]"
                                >
                                    Next
                                </button>
                            </form>
                        </div>
                    </div>
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
