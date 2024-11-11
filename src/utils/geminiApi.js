// const { GoogleGenerativeAI } = require("@google/generative-ai");
// // const genAI = new GoogleGenerativeAI(`${process.env.GEMINI_API}`);
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
// const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// export default async function fetchGeminiResponse(prompt) {
//     prompt = prompt;
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();
//     return text;
// }

import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const API_KEY = "AIzaSyACMYhse_AUCjKroRavW8qE5X34WnVVqcs"; //jan bujh ke yaha dala h

export async function fetchGeminiResponse(prompt) {
    try {
        if (!API_KEY) {
            throw new Error("API key not found in environment variables");
        }

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // Modify prompt to request markdown formatting
        const markdownPrompt = `${prompt}\n\nPlease provide the response in markdown format with proper headings, lists, and emphasis where appropriate. Keep it within 100 words.`;
        
        const result = await model.generateContent(markdownPrompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Configuration Error:", error);
        throw error;
    }
}

// Function to download report as PDF
export const downloadReportAsPDF = async (reportContent, filename = 'health-report.pdf') => {
    try {
        const element = document.getElementById('report-content');
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL('image/png');
        
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(filename);
    } catch (error) {
        console.error('Error generating PDF:', error);
        // throw error;
    }
};