// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import TopNavbar from "./TopNavbar";
// import Image from "next/image";
// import { FaLocationArrow } from "react-icons/fa";

// const SessionMain = () => {

//     const reportData =
//     {
//         "patient_info": {
//             "name": "Ayush Awasthi",
//             "gender": "Male",
//             "age": 20,
//             "ref_by": "Dr. Subhash Mishra",
//             "collection_date": "29/09/2024, 4:27:17 PM",
//             "report_date": "15/09/2024, 2:15:42 PM",
//             "report_status": "Final",
//             "collection_centre": "Charak Diagnostics, Chowk, Lucknow Uttar Pradesh"
//         },
//         "test_results": {
//             "OGTT (Hexokinase)": {
//                 "fasting_glucose": {
//                     "value": 80.00,
//                     "unit": "mg/dL",
//                     "range": "70-100 mg/dL"
//                 },
//                 "2hrs_post_load_glucose": {
//                     "value": 79.00,
//                     "unit": "mg/dL",
//                     "range": "70-140 mg/dL"
//                 }
//             }
//         },
//         "interpretation": {
//             "normal": {
//                 "fasting_plasma_glucose": "70-100 mg/dL",
//                 "post_75g_glucose_load": "70-140 mg/dL"
//             },
//             "impaired_fasting_glucose": {
//                 "fasting_plasma_glucose": "101-125 mg/dL",
//                 "post_75g_glucose_load": "70-140 mg/dL"
//             },
//             "impaired_glucose_tolerance": {
//                 "fasting_plasma_glucose": "70-100 mg/dL",
//                 "post_75g_glucose_load": "141-199 mg/dL"
//             },
//             "pre_diabetes": {
//                 "fasting_plasma_glucose": "101-125 mg/dL",
//                 "post_75g_glucose_load": "141-199 mg/dL"
//             },
//             "diabetes_mellitus": {
//                 "fasting_plasma_glucose": ">126 mg/dL",
//                 "post_75g_glucose_load": ">200 mg/dL"
//             },
//             "note": "The diagnosis of Diabetes requires: A fasting plasma glucose of ≥126 mg/dL or A random/2-hour post-glucose value of ≥200 mg/dL on at least 2 occasions."
//         },
//         "doctor_analysis": {
//             "doctors": [
//                 "Dr. Himangshu Mazumdar (Senior Consultant - Clinical Chemistry & Biochemical Genetics)",
//                 "Dr. Kamal Modi (Consultant Biochemist)",
//                 "Dr. Nimmi Kansal (National Head - Clinical Chemistry & Biochemical Genetics)"
//             ]
//         },
//         "important_instructions": [
//             "Test results depend on the sample's quality and should be clinically correlated.",
//             "Certain tests may need additional testing at extra cost.",
//             "Test results are not valid for medico-legal purposes.",
//             "For queries, contact customer care at +91-11-39885050."
//         ]
//     };


//     const [file, setFile] = useState(null);
//     const [text, setText] = useState('');
//     const [start, setStart] = useState(false);

//     // Handle file upload
//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleSubmit = () => {
//         e.preventDefault();
//         alert("File uploaded successfully!");
//     }

//     return (
//         <div className="h-full flex flex-col gap-[1rem]">
//             <div>
//                 <TopNavbar route={"Session"} userName={"Ayush Awasthi"} />
//             </div>
//             <div className="flex gap-[1rem] items-center h-full bg-white rounded-3xl">
//                 <div
//                     className=" flex flex-col  gap-[3rem] "
//                     style={{ width: "100%", textAlign: "center" }}
//                 >
//                     <div className="flex flex-col gap-[0rem]">
//                         <div className="w-92% flex mb-[-2rem] justify-center">
//                             <img src="/images/logo.png" alt="logo" height={200} width={200} />
//                         </div>
//                         <div>
//                             <h2
//                                 className="flex items-center justify-center h-10 "
//                                 style={{
//                                     fontSize: "1.5rem",
//                                     fontWeight: "bold",
//                                     padding: "1px",
//                                 }}
//                             >
//                                 Start your session with Sanidh
//                             </h2>
//                             <h4 className="flex items-center justify-center h-10 ">
//                                 Hi there! 👋 I'm SANIDH, your AI medical assistant, here to
//                                 provide you with quick, reliable health information and
//                                 <br /> support. Let's take a step toward better health together!
//                                 😊
//                             </h4>
//                         </div>
//                     </div>
//                     {/* <div className={'flex flex-col gap-[1rem] w-[70%]'}>
//                     <div className='bg-yellow-300 h-[30%] rounded-3xl relative'>
//                         <Image src="/images/Frame 2609065.png" className="z-10 w-full h-full absolute object-cover rounded-3xl" alt="Logo" width={1800} height={700} />
//                     </div>
//                 </div> */}
//                     <div className="container  ">
//                         <div
//                             className=" rounded-3xl w-[50%] h-[7rem] p-4 px-5 mx-auto flex justify-between items-center"
//                             style={{
//                                 backgroundImage: `url('/images/sessionmain.png')`,
//                             }}
//                         >
//                             {/* <Image
//                 src="/images/sessionmain.png"
//                 className="absolute w-full h-full object-cover rounded-3xl"
//                 alt="Logo"
//                 width={1800}
//                 height={500}
//               /> */}
//                             <div
//                                 className="font-bold text-[1.3rem]"
//                                 style={{ padding: "15px" }}
//                             >
//                                 Upload Your First Document
//                             </div>
//                             {/* <div className='w-[70%]'>aaaa</div> */}

//                             <form className="flex flex-col gap-3" method="post" action="/api/multer" encType="multipart/form-data">
//                                 <input type="file" name="fileUpload" id="" onChange={handleFileChange} />
//                                 <label
//                                     // type="button"
//                                     htmlFor="fileUpload"
//                                     className="h-10 p-3 px-4 flex gap-3 cursor-pointer items-center justify-center border bg-[#5271FF] rounded-full text-white"
//                                 >
//                                     Upload Report
//                                 </label>

//                                 <button
//                                     type="button"
//                                     onClick={handleSubmit}
//                                     className="h-10 p-3 px-4 flex items-center justify-center border-2 border-gray-300 rounded-full text-[#5271FF]"
//                                 >
//                                     Next
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-[92%] flex justify-center fixed  bottom-[2rem] mx-auto">
//                     <div className="w-full flex justify-center  ">
//                         <div className="flex border w-1/2 rounded-full border-gray-200 bg-[#F2F6FE] h-[3.5rem] px-1 items-center gap-1 justify-between">
//                             <button
//                                 type="button"
//                                 className="h-[3rem] w-[3rem] rounded-full text-white bg-[#5271FF] text-5xl flex justify-center items-center"
//                             >
//                                 {" "}
//                                 +
//                             </button>
//                             <input
//                                 type=" text"
//                                 className="w-[80%] bg-[#F2F6FE] outline-none focus:shadow-sm h-full  "
//                             />
//                             <button
//                                 type="button"
//                                 className="h-[3rem] w-[3rem] rounded-full text-white bg-[#5271FF] text-5xl flex justify-center items-center"
//                             >
//                                 {" "}
//                                 <FaLocationArrow size="1.5rem" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 {/* </div> */}
//             </div>
//         </div>
//     );
// };
// export default SessionMain;




// import React, { useRef, useState } from "react";
// import PropTypes from "prop-types";
// import TopNavbar from "./TopNavbar";
// import Image from "next/image";
// import { FaLocationArrow } from "react-icons/fa";
// import Chatbot from './Chatbot'

// const SessionMain = () => {

// const reportData =
// {
//     "patient_info": {
//         "name": "Ayush Awasthi",
//         "gender": "Male",
//         "age": 20,
//         "ref_by": "Dr. Subhash Mishra",
//         "collection_date": "29/09/2024, 4:27:17 PM",
//         "report_date": "15/09/2024, 2:15:42 PM",
//         "report_status": "Final",
//         "collection_centre": "Charak Diagnostics, Chowk, Lucknow Uttar Pradesh"
//     },
//     "test_results": {
//         "OGTT (Hexokinase)": {
//             "fasting_glucose": {
//                 "value": 80.00,
//                 "unit": "mg/dL",
//                 "range": "70-100 mg/dL"
//             },
//             "2hrs_post_load_glucose": {
//                 "value": 79.00,
//                 "unit": "mg/dL",
//                 "range": "70-140 mg/dL"
//             }
//         }
//     },
//     "interpretation": {
//         "normal": {
//             "fasting_plasma_glucose": "70-100 mg/dL",
//             "post_75g_glucose_load": "70-140 mg/dL"
//         },
//         "impaired_fasting_glucose": {
//             "fasting_plasma_glucose": "101-125 mg/dL",
//             "post_75g_glucose_load": "70-140 mg/dL"
//         },
//         "impaired_glucose_tolerance": {
//             "fasting_plasma_glucose": "70-100 mg/dL",
//             "post_75g_glucose_load": "141-199 mg/dL"
//         },
//         "pre_diabetes": {
//             "fasting_plasma_glucose": "101-125 mg/dL",
//             "post_75g_glucose_load": "141-199 mg/dL"
//         },
//         "diabetes_mellitus": {
//             "fasting_plasma_glucose": ">126 mg/dL",
//             "post_75g_glucose_load": ">200 mg/dL"
//         },
//         "note": "The diagnosis of Diabetes requires: A fasting plasma glucose of ≥126 mg/dL or A random/2-hour post-glucose value of ≥200 mg/dL on at least 2 occasions."
//     },
//     "doctor_analysis": {
//         "doctors": [
//             "Dr. Himangshu Mazumdar (Senior Consultant - Clinical Chemistry & Biochemical Genetics)",
//             "Dr. Kamal Modi (Consultant Biochemist)",
//             "Dr. Nimmi Kansal (National Head - Clinical Chemistry & Biochemical Genetics)"
//         ]
//     },
//     "important_instructions": [
//         "Test results depend on the sample's quality and should be clinically correlated.",
//         "Certain tests may need additional testing at extra cost.",
//         "Test results are not valid for medico-legal purposes.",
//         "For queries, contact customer care at +91-11-39885050."
//     ]
// };

//     const [started, setStarted] = useState(false);

//     const fileInputRef = useRef(null);

//     const handleButtonClick = () => {
//         fileInputRef.current.click();
//     };

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             console.log("Selected file:", file);
//         }
//     };

//     return (
//         <div className="h-full flex flex-col gap-[1rem]">
//             <div>
//                 <TopNavbar route={"Session"} userName={"Ayush Awasthi"} />
//             </div>
//             <div className="flex gap-[1rem] items-center h-full bg-white rounded-3xl">
//                 {!started ? (<div
//                     className=" flex flex-col  gap-[3rem] "
//                     style={{ width: "100%", textAlign: "center" }}
//                 >
//                     <div className="flex flex-col gap-[0rem]">
//                         <div className="w-92% flex mb-[-1rem] justify-center">
//                             <img src="/images/logo.png" alt="logo" height={200} width={200} />
//                         </div>
//                         <div>
//                             <h2
//                                 className="flex items-center justify-center h-10 "
//                                 style={{
//                                     fontSize: "1.5rem",
//                                     fontWeight: "bold",
//                                     padding: "1px",
//                                 }}
//                             >
//                                 Start your session with Sanidh
//                             </h2>
//                             <h4 className="flex items-center justify-center h-10 ">
//                                 Hi there! 👋 I'm SANIDH, your AI medical assistant, here to
//                                 provide you with quick, reliable health information and
//                                 <br /> support. Let's take a step toward better health together!
//                                 😊
//                             </h4>
//                         </div>
//                     </div>
//                     <div className="container  ">
//                         <div
//                             className=" rounded-3xl w-[50%] h-[7rem] p-4 px-5 mx-auto flex justify-between items-center"
//                             style={{
//                                 backgroundImage: `url('/images/sessionmain.png')`,
//                             }}
//                         >
//                             <div
//                                 className="font-bold text-[1.3rem]"
//                                 style={{ padding: "15px" }}
//                             >
//                                 Upload Your First Document
//                             </div>

//                             <div className="flex flex-col gap-3  ">
//                                 <button
//                                     type="button"
//                                     onClick={handleButtonClick}
//                                     className="h-10 p-3 px-4 flex gap-3 items-center justify-center border bg-[#5271FF] rounded-full text-white"
//                                 >
//                                     Upload Report
//                                 </button>

//                                 {/* Hidden file input */}
//                                 <input
//                                     type="file"
//                                     ref={fileInputRef}
//                                     onChange={handleFileChange}
//                                     style={{ display: "none" }}
//                                 />

//                                 <button
//                                     type="button"
//                                     className="h-10 p-3 px-4 flex items-center justify-center border-2 border-gray-300 rounded-full text-[#5271FF]"
//                                     onClick={() => setStarted(true)}
//                                 >
//                                     Next
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>) :
//                     (
//                         // <div className="w-full min-h-24  px-16  ">
//                         //     <UserChat
//                         //         message={
//                         //             " giving the ofx in the various way to  response to the system goes to the various team name allowed o the fox generated the meaage to tgo the to pibn tet"
//                         //         }
//                         //     />
//                         //     <AIResponse
//                         //         message={
//                         //             " giving the ofx in the various way to  response to the system goes to the various team name allowed o the fox generated the meaage to tgo the to pibn tet"
//                         //         }
//                         //     />
//                         // </div>
//                         <Chatbot />
//                     )}
//                 <div className="w-[92%] flex justify-center fixed  bottom-[2rem] mx-auto">
//                     <div className="w-full flex justify-center  ">
//                         <div className="flex border w-1/2 rounded-full border-gray-200 bg-[#F2F6FE] h-[3.5rem] px-1 items-center gap-1 justify-between">
//                             <button
//                                 type="button"
//                                 className="h-[3rem] w-[3rem] rounded-full text-white bg-[#5271FF] text-5xl flex justify-center items-center"
//                             >
//                                 {" "}
//                                 +
//                             </button>
//                             <input
//                                 type=" text"
//                                 className="w-[80%] bg-[#F2F6FE] outline-none focus:shadow-sm h-full  "
//                             />
//                             <button
//                                 type="button"
//                                 className="h-[3rem] w-[3rem] rounded-full text-white bg-[#5271FF] text-5xl flex justify-center items-center"
//                             >
//                                 {" "}
//                                 <FaLocationArrow size="1.5rem" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 {/* </div> */}
//             </div>
//         </div>
//     );
// };
// export default SessionMain;

// const UserChat = ({ message }) => {
//     return (
//         <div className="flex flex-row-reverse gap-2 my-[1rem]">
//             <div
//                 className="w-10 h-10 bg-gray-300 rounded-full object-cover object-center border border-gray-500 "
//                 style={{
//                     backgroundImage: `url('/images/india-flag.png')`,
//                 }}
//             ></div>
//             <div className=" p-2 px-4 rounded-2xl bg-[#F2F6FE] max-w-[60%]">
//                 {message}
//             </div>
//         </div>
//     );
// };
// const AIResponse = ({ message }) => {
//     return (
//         <div className="flex gap-2 px-16 my-[1rem]">
//             <div
//                 className="w-10 h-10 bg-[#CDE8F6] ] rounded-full object-cover object-center border border-gray-500 overflow-hidden "
//             // style={{
//             //   backgroundImage: url('/images/logo.png'),
//             // }}
//             >
//                 <img src="images/logo.png" alt="logo" width={80} height={80} />
//             </div>
//             <div className=" p-2 px-3 rounded-2xl bg-[#CDE8F6] max-w-[60%]">
//                 {message}
//             </div>
//         </div>
//     );
// };


// import React, { useRef, useState } from "react";
// import PropTypes from "prop-types";
// import TopNavbar from "./TopNavbar";
// import { FaLocationArrow } from "react-icons/fa";

// // Predefined questions and answers
// const PREDEFINED_QA = [
//     {
//         question: "Can you tell me about my glucose levels?",
//         answer: "Based on your OGTT results, your fasting glucose is 80.00 mg/dL (normal range: 70-100 mg/dL) and your 2-hour post-load glucose is 79.00 mg/dL (normal range: 70-140 mg/dL). These values are within normal ranges, indicating healthy glucose control."
//     },
//     {
//         question: "Who analyzed my report?",
//         answer: "Your report was analyzed by three specialists: Dr. Himangshu Mazumdar (Senior Consultant in Clinical Chemistry), Dr. Kamal Modi (Consultant Biochemist), and Dr. Nimmi Kansal (National Head of Clinical Chemistry)."
//     },
//     {
//         question: "What are the important instructions regarding my test results?",
//         answer: "There are several important instructions: 1) Test results depend on sample quality and need clinical correlation, 2) Some tests may require additional testing at extra cost, 3) These results are not valid for medico-legal purposes, 4) For any queries, you can contact customer care at +91-11-39885050."
//     }
// ];

// const SessionMain = () => {
//     const [started, setStarted] = useState(false);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [chatHistory, setChatHistory] = useState([]);
//     const [inputValue, setInputValue] = useState("");
//     const fileInputRef = useRef(null);

//     const handleButtonClick = () => {
//         fileInputRef.current.click();
//     };

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             console.log("Selected file:", file);
//         }
//     };

//     const handleSendMessage = () => {
//         if (inputValue.trim() || currentQuestionIndex < PREDEFINED_QA.length) {
//             const newMessage = inputValue.trim()
//                 ? inputValue
//                 : PREDEFINED_QA[currentQuestionIndex].question;

//             // Add user message
//             setChatHistory(prev => [...prev, {
//                 type: 'user',
//                 message: newMessage
//             }]);

//             // Add AI response
//             setTimeout(() => {
//                 setChatHistory(prev => [...prev, {
//                     type: 'ai',
//                     message: PREDEFINED_QA[currentQuestionIndex].answer
//                 }]);
//                 setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//             }, 1000);

//             setInputValue("");
//         }
//     };

//     const ChatDisplay = () => (
//         <div className="w-full min-h-24 px-16 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 250px)' }}>
//             {chatHistory.map((chat, index) => (
//                 chat.type === 'user'
//                     ? <UserChat key={index} message={chat.message} />
//                     : <AIResponse key={index} message={chat.message} />
//             ))}
//         </div>
//     );

//     return (
//         <div className="h-full flex flex-col gap-[1rem]">
//             <div>
//                 <TopNavbar route={"Session"} userName={"Ayush Awasthi"} />
//             </div>
//             <div className="flex gap-[1rem] items-center h-full bg-white rounded-3xl">
//                 {!started ? (
//                     <div className="flex flex-col gap-[3rem]" style={{ width: "100%", textAlign: "center" }}>
//                         <div className="flex flex-col gap-[0rem]">
//                             <div className="w-92% flex mb-[-1rem] justify-center">
//                                 <img src="/images/logo.png" alt="logo" height={200} width={200} />
//                             </div>
//                             <div>
//                                 <h2 className="flex items-center justify-center h-10" style={{ fontSize: "1.5rem", fontWeight: "bold", padding: "1px" }}>
//                                     Start your session with Sanidh
//                                 </h2>
//                                 <h4 className="flex items-center justify-center h-10">
//                                     Hi there! 👋 I'm SANIDH, your AI medical assistant, here to provide you with quick, reliable health information and
//                                     <br /> support. Let's take a step toward better health together! 😊
//                                 </h4>
//                             </div>
//                         </div>
//                         <div className="container">
//                             <div className="rounded-3xl w-[50%] h-[7rem] p-4 px-5 mx-auto flex justify-between items-center"
//                                 style={{ backgroundImage: `url('/images/sessionmain.png')` }}>
//                                 <div className="font-bold text-[1.3rem]" style={{ padding: "15px" }}>
//                                     Upload Your First Document
//                                 </div>
//                                 <div className="flex flex-col gap-3">
//                                     <button type="button" onClick={handleButtonClick}
//                                         className="h-10 p-3 px-4 flex gap-3 items-center justify-center border bg-[#5271FF] rounded-full text-white">
//                                         Upload Report
//                                     </button>
//                                     <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
//                                     <button type="button"
//                                         className="h-10 p-3 px-4 flex items-center justify-center border-2 border-gray-300 rounded-full text-[#5271FF]"
//                                         onClick={() => setStarted(true)}>
//                                         Next
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <ChatDisplay />
//                 )}

//                 <div className="w-[92%] flex justify-center fixed bottom-[2rem] mx-auto">
//                     <div className="w-full flex justify-center">
//                         <div className="flex border w-1/2 rounded-full border-gray-200 bg-[#F2F6FE] h-[3.5rem] px-1 items-center gap-1 justify-between">
//                             <button type="button"
//                                 className="h-[3rem] w-[3rem] rounded-full text-white bg-[#5271FF] text-5xl flex justify-center items-center"
//                                 onClick={() => {
//                                     if (currentQuestionIndex < PREDEFINED_QA.length) {
//                                         handleSendMessage();
//                                     }
//                                 }}>
//                                 +
//                             </button>
//                             <input
//                                 type="text"
//                                 value={inputValue}
//                                 onChange={(e) => setInputValue(e.target.value)}
//                                 onKeyPress={(e) => {
//                                     if (e.key === 'Enter') {
//                                         handleSendMessage();
//                                     }
//                                 }}
//                                 className="w-[80%] bg-[#F2F6FE] outline-none focus:shadow-sm h-full"
//                             />
//                             <button type="button"
//                                 className="h-[3rem] w-[3rem] rounded-full text-white bg-[#5271FF] text-5xl flex justify-center items-center"
//                                 onClick={handleSendMessage}>
//                                 <FaLocationArrow size="1.5rem" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const UserChat = ({ message }) => {
//     return (
//         <div className="flex flex-row-reverse gap-2 my-[1rem]">
//             <div
//                 className="w-10 h-10 bg-gray-300 rounded-full object-cover object-center border border-gray-500"
//                 style={{ backgroundImage: `url('/images/india-flag.png')` }}
//             ></div>
//             <div className="p-2 px-4 rounded-2xl bg-[#F2F6FE] max-w-[60%]">
//                 {message}
//             </div>
//         </div>
//     );
// };

// const AIResponse = ({ message }) => {
//     return (
//         <div className="flex gap-2 px-16 my-[1rem]">
//             <div className="w-10 h-10 bg-[#CDE8F6] rounded-full object-cover object-center border border-gray-500 overflow-hidden">
//                 <img src="images/logo.png" alt="logo" width={80} height={80} />
//             </div>
//             <div className="p-2 px-3 rounded-2xl bg-[#CDE8F6] max-w-[60%]">
//                 {message}
//             </div>
//         </div>
//     );
// };

// export default SessionMain;



// import React, { useRef, useState } from "react";
// import PropTypes from "prop-types";
// import TopNavbar from "./TopNavbar";
// import { FaLocationArrow } from "react-icons/fa";

// // Predefined questions and answers
// const PREDEFINED_QA = [
//     {
//         question: "Can you tell me about my glucose levels?",
//         answer: "Based on your OGTT results, your fasting glucose is 80.00 mg/dL (normal range: 70-100 mg/dL) and your 2-hour post-load glucose is 79.00 mg/dL (normal range: 70-140 mg/dL). These values are within normal ranges, indicating healthy glucose control."
//     },
//     {
//         question: "Who analyzed my report?",
//         answer: "Your report was analyzed by three specialists: Dr. Himangshu Mazumdar (Senior Consultant in Clinical Chemistry), Dr. Kamal Modi (Consultant Biochemist), and Dr. Nimmi Kansal (National Head of Clinical Chemistry)."
//     },
//     {
//         question: "What are the important instructions regarding my test results?",
//         answer: "There are several important instructions: 1) Test results depend on sample quality and need clinical correlation, 2) Some tests may require additional testing at extra cost, 3) These results are not valid for medico-legal purposes, 4) For any queries, you can contact customer care at +91-11-39885050."
//     }
// ];

// const SessionMain = () => {
//     const [started, setStarted] = useState(false);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [chatHistory, setChatHistory] = useState([]);
//     const [inputValue, setInputValue] = useState("");
//     const fileInputRef = useRef(null);

//     const handleButtonClick = () => {
//         fileInputRef.current.click();
//     };

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             console.log("Selected file:", file);
//         }
//     };

//     const handleSendMessage = () => {
//         if (inputValue.trim() || currentQuestionIndex < PREDEFINED_QA.length) {
//             const newMessage = inputValue.trim()
//                 ? inputValue
//                 : PREDEFINED_QA[currentQuestionIndex].question;

//             // Add user message
//             setChatHistory(prev => [...prev, {
//                 type: 'user',
//                 message: newMessage
//             }]);

//             // Add AI response
//             setTimeout(() => {
//                 setChatHistory(prev => [...prev, {
//                     type: 'ai',
//                     message: PREDEFINED_QA[currentQuestionIndex].answer
//                 }]);
//                 setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//             }, 1000);

//             setInputValue("");
//         }
//     };

//     return (
//         <div className="h-full flex flex-col gap-[1rem]">
//             <div>
//                 <TopNavbar route={"Session"} userName={"Ayush Awasthi"} />
//             </div>
//             <div className="flex gap-[1rem] items-center h-full bg-white rounded-3xl">
//                 {!started ? (
//                     <div className="flex flex-col gap-[3rem]" style={{ width: "100%", textAlign: "center" }}>
//                         <div className="flex flex-col gap-[0rem]">
//                             <div className="w-92% flex mb-[-1rem] justify-center">
//                                 <img src="/images/logo.png" alt="logo" height={200} width={200} />
//                             </div>
//                             <div>
//                                 <h2 className="flex items-center justify-center h-10" style={{ fontSize: "1.5rem", fontWeight: "bold", padding: "1px" }}>
//                                     Start your session with Sanidh
//                                 </h2>
//                                 <h4 className="flex items-center justify-center h-10">
//                                     Hi there! 👋 I'm SANIDH, your AI medical assistant, here to provide you with quick, reliable health information and
//                                     <br /> support. Let's take a step toward better health together! 😊
//                                 </h4>
//                             </div>
//                         </div>
//                         <div className="container">
//                             <div className="rounded-3xl w-[50%] h-[7rem] p-4 px-5 mx-auto flex justify-between items-center"
//                                 style={{ backgroundImage: `url('/images/sessionmain.png')` }}>
//                                 <div className="font-bold text-[1.3rem]" style={{ padding: "15px" }}>
//                                     Upload Your First Document
//                                 </div>
//                                 <div className="flex flex-col gap-3">
//                                     <button type="button" onClick={handleButtonClick}
//                                         className="h-10 p-3 px-4 flex gap-3 items-center justify-center border bg-[#5271FF] rounded-full text-white">
//                                         Upload Report
//                                     </button>
//                                     <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
//                                     <button type="button"
//                                         className="h-10 p-3 px-4 flex items-center justify-center border-2 border-gray-300 rounded-full text-[#5271FF]"
//                                         onClick={() => setStarted(true)}>
//                                         Next
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     // Chat Display Section
//                     <div className="w-full h-full flex flex-col">
//                         <div className="w-full flex-1 px-16 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 250px)' }}>
//                             {chatHistory.map((chat, index) => (
//                                 chat.type === 'user'
//                                     ? <UserChat key={index} message={chat.message} />
//                                     : <AIResponse key={index} message={chat.message} />
//                             ))}
//                         </div>

//                         <div className="w-[92%] flex justify-center mb-8 mx-auto">
//                             <div className="w-full flex justify-center">
//                                 <div className="flex border w-1/2 rounded-full border-gray-200 bg-[#F2F6FE] h-[3.5rem] px-1 items-center gap-1 justify-between">
//                                     <button type="button"
//                                         className="h-[3rem] w-[3rem] rounded-full text-white bg-[#5271FF] text-5xl flex justify-center items-center"
//                                         onClick={() => {
//                                             if (currentQuestionIndex < PREDEFINED_QA.length) {
//                                                 handleSendMessage();
//                                             }
//                                         }}>
//                                         +
//                                     </button>
//                                     <input
//                                         type="text"
//                                         value={inputValue}
//                                         onChange={(e) => setInputValue(e.target.value)}
//                                         onKeyPress={(e) => {
//                                             if (e.key === 'Enter') {
//                                                 handleSendMessage();
//                                             }
//                                         }}
//                                         className="w-[80%] bg-[#F2F6FE] outline-none focus:shadow-sm h-full"
//                                     />
//                                     <button type="button"
//                                         className="h-[3rem] w-[3rem] rounded-full text-white bg-[#5271FF] text-5xl flex justify-center items-center"
//                                         onClick={handleSendMessage}>
//                                         <FaLocationArrow size="1.5rem" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// const UserChat = ({ message }) => {
//     return (
//         <div className="flex flex-row-reverse gap-2 my-[1rem]">
//             <div
//                 className="w-10 h-10 bg-gray-300 rounded-full object-cover object-center border border-gray-500"
//                 style={{ backgroundImage: `url('/images/india-flag.png')` }}
//             ></div>
//             <div className="p-2 px-4 rounded-2xl bg-[#F2F6FE] max-w-[60%]">
//                 {message}
//             </div>
//         </div>
//     );
// };

// const AIResponse = ({ message }) => {
//     return (
//         <div className="flex gap-2 px-16 my-[1rem]">
//             <div className="w-10 h-10 bg-[#CDE8F6] rounded-full object-cover object-center border border-gray-500 overflow-hidden">
//                 <img src="images/logo.png" alt="logo" width={80} height={80} />
//             </div>
//             <div className="p-2 px-3 rounded-2xl bg-[#CDE8F6] max-w-[60%]">
//                 {message}
//             </div>
//         </div>
//     );
// };

// export default SessionMain;






// import React, { useRef, useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import TopNavbar from "./TopNavbar";
// import { FaLocationArrow } from "react-icons/fa";

// // Predefined questions 
// const AI_QUESTIONS = [
//     {
//         id: 1,
//         question: "Can you tell me how often do you experience fatigue during the day? (Never/Sometimes/Often/Always)",
//     },
//     {
//         id: 2,
//         question: "How many hours of sleep do you typically get each night?",
//     },
//     {
//         id: 3,
//         question: "Do you experience any dizziness after meals? (Yes/No)",
//     }
// ];

// const SessionMain = () => {
//     const [started, setStarted] = useState(false);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [chatHistory, setChatHistory] = useState([]);
//     const [userResponses, setUserResponses] = useState({});
//     const [inputValue, setInputValue] = useState("");
//     const fileInputRef = useRef(null);

//     // Function to have AI ask the first question when chat starts
//     useEffect(() => {
//         if (started && chatHistory.length === 0) {
//             setChatHistory([{
//                 type: 'ai',
//                 message: "Hello! I'll be asking you a few questions to better understand your health condition. " + AI_QUESTIONS[0].question
//             }]);
//         }
//     }, [started]);

//     const handleButtonClick = () => {
//         fileInputRef.current.click();
//     };

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             console.log("Selected file:", file);
//         }
//     };

//     const handleSendMessage = () => {
//         if (inputValue.trim() && currentQuestionIndex < AI_QUESTIONS.length) {
//             // Save user's response
//             setUserResponses(prev => ({
//                 ...prev,
//                 [AI_QUESTIONS[currentQuestionIndex].id]: inputValue.trim()
//             }));

//             // Add user's message to chat
//             setChatHistory(prev => [...prev, {
//                 type: 'user',
//                 message: inputValue.trim()
//             }]);

//             // Clear input
//             setInputValue("");

//             // Move to next question after a short delay
//             setTimeout(() => {
//                 const nextIndex = currentQuestionIndex + 1;
//                 if (nextIndex < AI_QUESTIONS.length) {
//                     setChatHistory(prev => [...prev, {
//                         type: 'ai',
//                         message: AI_QUESTIONS[nextIndex].question
//                     }]);
//                     setCurrentQuestionIndex(nextIndex);
//                 } else {
//                     setChatHistory(prev => [...prev, {
//                         type: 'ai',
//                         message: "Thank you for answering all the questions! I have saved your responses."
//                     }]);
//                     console.log("All responses:", userResponses);
//                 }
//             }, 1000);
//         }
//     };

//     return (
//         <div className="h-full flex flex-col gap-[1rem]">
//             <div>
//                 <TopNavbar route={"Session"} userName={"Ayush Awasthi"} />
//             </div>
//             <div className="flex gap-[1rem] items-center h-full bg-white rounded-3xl">
//                 {!started ? (
//                     <div className="flex flex-col gap-[3rem]" style={{ width: "100%", textAlign: "center" }}>
//                         <div className="flex flex-col gap-[0rem]">
//                             <div className="w-92% flex mb-[-1rem] justify-center">
//                                 <img src="/images/logo.png" alt="logo" height={200} width={200} />
//                             </div>
//                             <div>
//                                 <h2 className="flex items-center justify-center h-10" style={{ fontSize: "1.5rem", fontWeight: "bold", padding: "1px" }}>
//                                     Start your session with Sanidh
//                                 </h2>
//                                 <h4 className="flex items-center justify-center h-10">
//                                     Hi there! 👋 I'm SANIDH, your AI medical assistant, here to provide you with quick, reliable health information and
//                                     <br /> support. Let's take a step toward better health together! 😊
//                                 </h4>
//                             </div>
//                         </div>
//                         <div className="container">
//                             <div className="rounded-3xl w-[50%] h-[7rem] p-4 px-5 mx-auto flex justify-between items-center"
//                                 style={{ backgroundImage: `url('/images/sessionmain.png')` }}>
//                                 <div className="font-bold text-[1.3rem]" style={{ padding: "15px" }}>
//                                     Upload Your First Document
//                                 </div>
//                                 <div className="flex flex-col gap-3">
//                                     <button type="button" onClick={handleButtonClick}
//                                         className="h-10 p-3 px-4 flex gap-3 items-center justify-center border bg-[#5271FF] rounded-full text-white">
//                                         Upload Report
//                                     </button>
//                                     <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
//                                     <button type="button"
//                                         className="h-10 p-3 px-4 flex items-center justify-center border-2 border-gray-300 rounded-full text-[#5271FF]"
//                                         onClick={() => setStarted(true)}>
//                                         Next
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="w-full h-full flex flex-col">
//                         <div className="w-full flex-1 px-16 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 250px)' }}>
//                             {chatHistory.map((chat, index) => (
//                                 chat.type === 'user'
//                                     ? <UserChat key={index} message={chat.message} />
//                                     : <AIResponse key={index} message={chat.message} />
//                             ))}
//                         </div>

//                         <div className="w-[92%] flex justify-center mb-8 mx-auto">
//                             <div className="w-full flex justify-center">
//                                 <div className="flex border w-1/2 rounded-full border-gray-200 bg-[#F2F6FE] h-[3.5rem] px-1 items-center gap-1 justify-between">
//                                     <input
//                                         type="text"
//                                         value={inputValue}
//                                         onChange={(e) => setInputValue(e.target.value)}
//                                         onKeyPress={(e) => {
//                                             if (e.key === 'Enter') {
//                                                 handleSendMessage();
//                                             }
//                                         }}
//                                         placeholder="Type your answer here..."
//                                         className="w-[90%] bg-[#F2F6FE] outline-none focus:shadow-sm h-full px-4"
//                                     />
//                                     <button type="button"
//                                         className="h-[3rem] w-[3rem] rounded-full text-white bg-[#5271FF] text-5xl flex justify-center items-center"
//                                         onClick={handleSendMessage}>
//                                         <FaLocationArrow size="1.5rem" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// const UserChat = ({ message }) => {
//     return (
//         <div className="flex flex-row-reverse gap-2 my-[1rem]">
//             <div
//                 className="w-10 h-10 bg-gray-300 rounded-full object-cover object-center border border-gray-500"
//                 style={{ backgroundImage: `url('/images/india-flag.png')` }}
//             ></div>
//             <div className="p-2 px-4 rounded-2xl bg-[#F2F6FE] max-w-[60%]">
//                 {message}
//             </div>
//         </div>
//     );
// };

// const AIResponse = ({ message }) => {
//     return (
//         <div className="flex gap-2 px-16 my-[1rem]">
//             <div className="w-10 h-10 bg-[#CDE8F6] rounded-full object-cover object-center border border-gray-500 overflow-hidden">
//                 <img src="images/logo.png" alt="logo" width={80} height={80} />
//             </div>
//             <div className="p-2 px-3 rounded-2xl bg-[#CDE8F6] max-w-[60%]">
//                 {message}
//             </div>
//         </div>
//     );
// };

// export default SessionMain;




import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import TopNavbar from "./TopNavbar";
// import { FaLocationArrow, FaDownload, FaSpinner } from "react-icons/fa";
import { fetchGeminiResponse, downloadReportAsPDF } from '../utils/geminiApi'
import ReactMarkdown from 'react-markdown';
import { FaLocationArrow, FaDownload, FaSpinner } from "react-icons/fa";

const AI_QUESTIONS = [
    {
        id: 1,
        question: "Can you tell me how often do you experience fatigue during the day? (Never/Sometimes/Often/Always)",
    },
    {
        id: 2,
        question: "How many hours of sleep do you typically get each night?",
    },
    {
        id: 3,
        question: "Do you experience any dizziness after meals? (Yes/No)",
    }
];

const SessionMain = () => {
    const [started, setStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [chatHistory, setChatHistory] = useState([]);
    const [userResponses, setUserResponses] = useState({});
    const [inputValue, setInputValue] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisComplete, setAnalysisComplete] = useState(false);
    const [healthReport, setHealthReport] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (started && chatHistory.length === 0) {
            setChatHistory([{
                type: 'ai',
                message: "Hello! I'll be asking you a few questions to better understand your health condition. " + AI_QUESTIONS[0].question
            }]);
        }
    }, [started]);

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

    // Mock API call to Gemini (replace with actual API integration)
    // const analyzeHealthData = async () => {
    //     // Simulate API delay
    //     await new Promise(resolve => setTimeout(resolve, 3000));

    //     // Mock response - replace with actual Gemini API call
    //     return {
    //         analysis: "Based on your responses, here's a detailed health analysis:\n\n" +
    //             "1. Fatigue Levels: Your reported fatigue patterns suggest...\n" +
    //             "2. Sleep Pattern: Your sleep duration indicates...\n" +
    //             "3. Post-meal Symptoms: Your response about dizziness suggests...\n\n" +
    //             "Recommendations:\n" +
    //             "- Consider maintaining a regular sleep schedule\n" +
    //             "- Monitor your meal patterns\n" +
    //             "- Track your energy levels throughout the day",
    //         timestamp: new Date().toLocaleString()
    //     };
    // };


    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("Selected file:", file);
        }
    };

    const generateReport = async () => {
        setIsAnalyzing(true);
        try {
            const finalReport = await fetchGeminiResponse(`${reportData} is the data of the report of the user\n ${chatHistory} is the chat the user had with a chatbot about thier health\n | 500-600 words report | Taking all this data, generate a report of a patient in order to guide him about his health and guide if he needs to go to a doctor with specialization and precautions before that, the report should be very detailed and Do not include health data and chat history`);
            // const analysis = await analyzeHealthData();
            setHealthReport(finalReport);

            setChatHistory(prev => [...prev, {
                type: 'ai',
                message: finalReport
            }]);

            setAnalysisComplete(true);
        } catch (error) {
            console.error("Analysis failed:", error);
            setChatHistory(prev => [...prev, {
                type: 'ai',
                message: "I apologize, but there was an error generating your health analysis. Please try again."
            }]);
        }
        setIsAnalyzing(false);
    };

    //     const downloadReport = () => {
    //         if (!healthReport) return;

    //         const reportText = `Health Analysis Report
    // Generated on: ${healthReport?.timestamp}

    // ${healthReport}

    // Responses:
    // ${Object.entries(userResponses).map(([id, response]) =>
    //             `Question ${id}: ${AI_QUESTIONS.find(q => q.id === parseInt(id)).question}
    // Answer: ${response}
    // `).join('\n')}`;

    //         const blob = new Blob([reportText], { type: 'text/plain' });
    //         const url = window.URL.createObjectURL(blob);
    //         const a = document.createElement('a');
    //         a.href = url;
    //         a.download = 'health-analysis-report.txt';
    //         document.body.appendChild(a);
    //         a.click();
    //         document.body.removeChild(a);
    //         window.URL.revokeObjectURL(url);
    //     };

    const downloadReport = async () => {
        if (!healthReport) return;

        const reportMarkdown = `# Health Analysis Report
Generated on: ${new Date().toLocaleString()}

${healthReport}

## User Responses
${Object.entries(userResponses).map(([id, response]) => `
### Question ${id}
${AI_QUESTIONS.find(q => q.id === parseInt(id)).question}
**Answer:** ${response}
`).join('\n')}`;

        try {
            // For direct markdown download
            const blob = new Blob([reportMarkdown], { type: 'text/markdown' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'health-analysis-report.md';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            await downloadReportAsPDF(reportMarkdown, 'health-analysis-report.pdf');
        } catch (error) {
            console.error('Error downloading report:', error);
        }
    };

    const handleSendMessage = () => {
        if (inputValue.trim() && currentQuestionIndex < AI_QUESTIONS.length) {
            setUserResponses(prev => ({
                ...prev,
                [AI_QUESTIONS[currentQuestionIndex].id]: inputValue.trim()
            }));

            setChatHistory(prev => [...prev, {
                type: 'user',
                message: inputValue.trim()
            }]);

            setInputValue("");

            setTimeout(() => {
                const nextIndex = currentQuestionIndex + 1;
                if (nextIndex < AI_QUESTIONS.length) {
                    setChatHistory(prev => [...prev, {
                        type: 'ai',
                        message: AI_QUESTIONS[nextIndex].question
                    }]);
                    setCurrentQuestionIndex(nextIndex);
                } else {
                    setChatHistory(prev => [...prev, {
                        type: 'ai',
                        message: "Thank you for answering all the questions! I'll now analyze your responses and generate a detailed health report."
                    }]);
                    generateReport();
                }
            }, 1000);
        }
    };

    return (
        <div className="h-full flex flex-col gap-[1rem]">
            <div>
                <TopNavbar route={"Session"} userName={"Ayush Awasthi"} />
            </div>
            <div className="flex gap-[1rem] items-center h-full p-0 bg-white rounded-3xl">
                {!started ? (
                    <div className="flex flex-col gap-[3rem]" style={{ width: "100%", textAlign: "center" }}>
                        {/* Welcome screen content remains the same */}
                        <div className="flex flex-col gap-[0rem]">
                            <div className="w-[92%] flex mb-[-1rem] justify-center">
                                <img src="/images/logo.png" alt="logo" height={200} width={200} />
                            </div>
                            <div>
                                <h2 className="flex items-center justify-center h-10" style={{ fontSize: "1.5rem", fontWeight: "bold", padding: "1px" }}>
                                    Start your session with Sanidh
                                </h2>
                                <h4 className="flex items-center justify-center h-10">
                                    Hi there! 👋 I&apos;m SANIDH, your AI medical assistant, here to provide you with quick, reliable health information and
                                    <br /> support. Let&apos;s take a step toward better health together! 😊
                                </h4>
                            </div>
                        </div>
                        <div className="container">
                            <div className="rounded-3xl w-[50%] h-[7rem] p-4 px-5 mx-auto flex justify-between items-center"
                                style={{ backgroundImage: `url('/images/sessionmain.png')` }}>
                                <div className="font-bold text-[1.3rem]" style={{ padding: "15px" }}>
                                    Upload Your First Document
                                </div>
                                <div className="flex flex-col gap-3">
                                    <button type="button" onClick={handleButtonClick}
                                        className="h-10 p-3 px-4 flex gap-3 items-center justify-center border bg-[#5271FF] rounded-full text-white">
                                        Upload Report
                                    </button>
                                    <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
                                    <button type="button"
                                        className="h-10 p-3 px-4 flex items-center justify-center border-2 border-gray-300 rounded-full text-[#5271FF]"
                                        onClick={() => setStarted(true)}>
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full  flex flex-col">
                        <div className="w-full flex-1 px-16 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 250px)' }}>
                            {chatHistory.map((chat, index) => (
                                chat.type === 'user'
                                    ? <UserChat key={index} message={chat.message} />
                                    : <AIResponse key={index} message={chat.message} />
                            ))}

                            {isAnalyzing && (
                                <div className="flex justify-center items-center gap-3 p-4">
                                    <FaSpinner className="animate-spin text-[#5271FF]" />
                                    <span className="text-gray-600">Analyzing your health conditions and generating report...</span>
                                </div>
                            )}
                        </div>

                        <div className="w-[92%] fixed bottom-0 flex justify-center mb-8 mx-auto">
                            {!isAnalyzing && !analysisComplete && (
                                <div className="w-full flex justify-center">
                                    <div className="flex border w-1/2 rounded-full border-gray-200 bg-[#F2F6FE] px-1 items-center gap-1 justify-between">
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyPress={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleSendMessage();
                                                }
                                            }}
                                            placeholder="Type your answer here..."
                                            className="w-[90%] bg-[#F2F6FE] outline-none focus:shadow-sm h-full px-4"
                                        />
                                        <button type="button"
                                            className="h-[3rem] w-[3rem] rounded-full text-white bg-[#5271FF] text-5xl flex justify-center items-center"
                                            onClick={handleSendMessage}>
                                            <FaLocationArrow size="1.5rem" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {analysisComplete && (
                                <div className="flex justify-center gap-4">
                                    <button
                                        onClick={downloadReport}
                                        className="flex items-center gap-2 px-4 py-2 bg-[#5271FF] text-white rounded-full hover:bg-blue-600 transition-colors"
                                    >
                                        <FaDownload /> Download Report
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const UserChat = ({ message }) => {
    return (
        <div className="flex flex-row-reverse gap-2 my-[1rem]">
            <div
                className="w-10 h-10 bg-gray-300 rounded-full object-cover object-center border border-gray-500"
                style={{ backgroundImage: `url('/images/india-flag.png')` }}
            ></div>
            <div className="p-2 px-4 rounded-2xl bg-[#F2F6FE] max-w-[60%]">
                {message}
            </div>
        </div>
    );
};

const AIResponse = ({ message }) => {
    return (
        <div className="flex gap-2 px-16 my-[1rem]">
            <div className="w-10 h-10 bg-[#CDE8F6] rounded-full object-cover object-center border border-gray-500 overflow-hidden">
                <img src="images/logo.png" alt="logo" width={80} height={80} />
            </div>
            <div className="p-2 px-3 rounded-2xl bg-[#CDE8F6] max-w-[60%]">
                <div className="markdown-preview">
                    <ReactMarkdown>{message}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default SessionMain;


const styles = `
.markdown-preview {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.markdown-preview h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.markdown-preview h2 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
}

.markdown-preview h3 {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.markdown-preview p {
    margin-bottom: 0.5rem;
}

.markdown-preview ul, .markdown-preview ol {
    margin-left: 1.5rem;
    margin-bottom: 0.5rem;
}

.markdown-preview li {
    margin-bottom: 0.25rem;
}

.markdown-preview strong {
    font-weight: bold;
}

.markdown-preview em {
    font-style: italic;
}
`;