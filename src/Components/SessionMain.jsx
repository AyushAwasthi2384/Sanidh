import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import TopNavbar from "./TopNavbar";
// import { FaLocationArrow, FaDownload, FaSpinner } from "react-icons/fa";
import { fetchGeminiResponse, downloadReportAsPDF } from "../utils/geminiApi";
import ReactMarkdown from "react-markdown";
import { FaLocationArrow, FaDownload, FaSpinner } from "react-icons/fa";

const AI_QUESTIONS = [
    {
        id: 1,
        question:
            "Can you tell me how often do you experience fatigue during the day? (Never/Sometimes/Often/Always)",
    },
    {
        id: 2,
        question: "How many hours of sleep do you typically get each night?",
    },
    {
        id: 3,
        question: "Do you experience any dizziness after meals? (Yes/No)",
    },
    {
        id: 4,
        question:
            "Have you ever had any previous health conditions?",
    },
    {
        id: 5,
        question:
            "Are there any current symptoms you would like to describe?",
    },
    {
        id: 6,
        question:
            "You are free to explain your coditions if any, otherwise write NONE.",
    },
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
            setChatHistory([
                {
                    type: "ai",
                    message:
                        "Hello! I'll be asking you a few questions to better understand your health condition. " +
                        AI_QUESTIONS[0].question,
                },
            ]);
        }
    }, [started]);

    const reportData = {
        patient_info: {
            name: "Ayush Awasthi",
            gender: "Male",
            age: 20,
            ref_by: "Dr. Subhash Mishra",
            collection_date: "29/09/2024, 4:27:17 PM",
            report_date: "15/09/2024, 2:15:42 PM",
            report_status: "Final",
            collection_centre: "Charak Diagnostics, Chowk, Lucknow Uttar Pradesh",
        },
        test_results: {
            "OGTT (Hexokinase)": {
                fasting_glucose: {
                    value: 80.0,
                    unit: "mg/dL",
                    range: "70-100 mg/dL",
                },
                "2hrs_post_load_glucose": {
                    value: 79.0,
                    unit: "mg/dL",
                    range: "70-140 mg/dL",
                },
            },
        },
        interpretation: {
            normal: {
                fasting_plasma_glucose: "70-100 mg/dL",
                post_75g_glucose_load: "70-140 mg/dL",
            },
            impaired_fasting_glucose: {
                fasting_plasma_glucose: "101-125 mg/dL",
                post_75g_glucose_load: "70-140 mg/dL",
            },
            impaired_glucose_tolerance: {
                fasting_plasma_glucose: "70-100 mg/dL",
                post_75g_glucose_load: "141-199 mg/dL",
            },
            pre_diabetes: {
                fasting_plasma_glucose: "101-125 mg/dL",
                post_75g_glucose_load: "141-199 mg/dL",
            },
            diabetes_mellitus: {
                fasting_plasma_glucose: ">126 mg/dL",
                post_75g_glucose_load: ">200 mg/dL",
            },
            note: "The diagnosis of Diabetes requires: A fasting plasma glucose of ≥126 mg/dL or A random/2-hour post-glucose value of ≥200 mg/dL on at least 2 occasions.",
        },
        doctor_analysis: {
            doctors: [
                "Dr. Himangshu Mazumdar (Senior Consultant - Clinical Chemistry & Biochemical Genetics)",
                "Dr. Kamal Modi (Consultant Biochemist)",
                "Dr. Nimmi Kansal (National Head - Clinical Chemistry & Biochemical Genetics)",
            ],
        },
        important_instructions: [
            "Test results depend on the sample's quality and should be clinically correlated.",
            "Certain tests may need additional testing at extra cost.",
            "Test results are not valid for medico-legal purposes.",
            "For queries, contact customer care at +91-11-39885050.",
        ],
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
            const finalReport = await fetchGeminiResponse(
                `${reportData} is the data of the report of the user\n ${chatHistory} is the chat the user had with a chatbot about thier health\n | 1500 words report | Taking all this data, generate a report of a patient in order to guide him about his health and guide if he needs to go to a doctor with specialization and precautions before that, the report should be very detailed and Do not include health data and chat history`
            );
            // const analysis = await analyzeHealthData();
            setHealthReport(finalReport);

            setChatHistory((prev) => [
                ...prev,
                {
                    type: "ai",
                    message: finalReport,
                },
            ]);

            setAnalysisComplete(true);
        } catch (error) {
            console.error("Analysis failed:", error);
            setChatHistory((prev) => [
                ...prev,
                {
                    type: "ai",
                    message:
                        "I apologize, but there was an error generating your health analysis. Please try again.",
                },
            ]);
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
${Object.entries(userResponses)
                .map(
                    ([id, response]) => `
### Question ${id}
${AI_QUESTIONS.find((q) => q.id === parseInt(id)).question}
**Answer:** ${response}
`
                )
                .join("\n")}`;

        try {
            // For direct markdown download
            const blob = new Blob([reportMarkdown], { type: "text/markdown" });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "health-analysis-report.md";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            await downloadReportAsPDF(reportMarkdown, "health-analysis-report.pdf");
        } catch (error) {
            // console.error("Error downloading report:", error);
        }
    };

    const handleSendMessage = () => {
        if (inputValue.trim() && currentQuestionIndex < AI_QUESTIONS.length) {
            setUserResponses((prev) => ({
                ...prev,
                [AI_QUESTIONS[currentQuestionIndex].id]: inputValue.trim(),
            }));

            setChatHistory((prev) => [
                ...prev,
                {
                    type: "user",
                    message: inputValue.trim(),
                },
            ]);

            setInputValue("");

            setTimeout(() => {
                const nextIndex = currentQuestionIndex + 1;
                if (nextIndex < AI_QUESTIONS.length) {
                    setChatHistory((prev) => [
                        ...prev,
                        {
                            type: "ai",
                            message: AI_QUESTIONS[nextIndex].question,
                        },
                    ]);
                    setCurrentQuestionIndex(nextIndex);
                } else {
                    setChatHistory((prev) => [
                        ...prev,
                        {
                            type: "ai",
                            message:
                                "Thank you for answering all the questions! I'll now analyze your responses and generate a detailed health report.",
                        },
                    ]);
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
                    <div
                        className="flex flex-col gap-[3rem]"
                        style={{ width: "100%", textAlign: "center" }}
                    >
                        {/* Welcome screen content remains the same */}
                        <div className="flex flex-col gap-[0rem]">
                            <div className="w-[92%] flex mb-[-1rem] justify-center">
                                <img
                                    src="/images/logo.png"
                                    alt="logo"
                                    height={200}
                                    width={200}
                                />
                            </div>
                            <div>
                                <h2
                                    className="flex items-center justify-center h-10"
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "bold",
                                        padding: "1px",
                                    }}
                                >
                                    Start your session with Sanidh
                                </h2>
                                <h4 className="flex items-center justify-center h-10">
                                    Hi there! 👋 I&apos;m SANIDH, your AI medical assistant, here
                                    to provide you with quick, reliable health information and
                                    <br /> support. Let&apos;s take a step toward better health
                                    together! 😊
                                </h4>
                            </div>
                        </div>
                        <div className="container">
                            <div
                                className="rounded-3xl w-[50%] h-[7rem] p-4 px-5 mx-auto flex justify-between items-center"
                                style={{ backgroundImage: `url('/images/sessionmain.png')` }}
                            >
                                <div
                                    className="font-bold text-[1.3rem]"
                                    style={{ padding: "15px" }}
                                >
                                    Upload Your First Document
                                </div>
                                <div className="flex flex-col gap-3">
                                    <button
                                        type="button"
                                        onClick={handleButtonClick}
                                        className="h-10 p-3 px-4 flex gap-3 items-center justify-center border bg-[#5271FF] rounded-full text-white"
                                    >
                                        Upload Report
                                    </button>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        style={{ display: "none" }}
                                    />
                                    <button
                                        type="button"
                                        className="h-10 p-3 px-4 flex items-center justify-center border-2 border-gray-300 rounded-full text-[#5271FF]"
                                        onClick={() => setStarted(true)}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full  flex flex-col">
                        <div
                            className="w-full flex-1 flex flex-col justify-end h-full px-16 overflow-y-auto"
                            style={{ maxHeight: "calc(100vh - 250px)" }}
                        >
                            {chatHistory.map((chat, index) =>
                                chat.type === "user" ? (
                                    <UserChat key={index} message={chat.message} />
                                ) : (
                                    <AIResponse key={index} message={chat.message} />
                                )
                            )}

                            {isAnalyzing && (
                                <div className="flex justify-center items-center gap-3 p-4">
                                    <FaSpinner className="animate-spin text-[#5271FF]" />
                                    <span className="text-gray-600">
                                        Analyzing your health conditions and generating report...
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="w-[92%] fixed bottom-0 flex justify-center mb-8 mx-auto">
                            {!isAnalyzing && !analysisComplete && (
                                <div className="w-full flex justify-center">
                                    <div className="flex border w-1/2 rounded-full overflow-hidden px-2 border-gray-200 bg-[#F2F6FE] p-1 items-center gap-1 justify-between">
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyPress={(e) => {
                                                if (e.key === "Enter") {
                                                    handleSendMessage();
                                                }
                                            }}
                                            placeholder="Type your answer here..."
                                            className="w-[90%] bg-[#F2F6FE] outline-none focus:shadow-sm h-full px-4"
                                        />
                                        <button
                                            type="button"
                                            className="h-[3rem] w-[3rem] rounded-full text-white bg-[#5271FF] text-5xl flex justify-center items-center"
                                            onClick={handleSendMessage}
                                        >
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
