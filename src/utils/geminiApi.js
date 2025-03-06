
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const API_KEY = "AIzaSyCDG0wArUJBQB5C8zcVRepFxUe6Vj0S5f8"; //jan bujh ke yaha dala h

export async function fetchGeminiResponse(prompt) {
    try {
        if (!API_KEY) {
            throw new Error("API key not found in environment variables");
        }

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        // Modify prompt to request markdown formatting
        const markdownPrompt = `${prompt}\n\nPlease provide the response in markdown format with proper headings, lists, and emphasis where appropriate.`;
        
        const result = await model.generateContent(markdownPrompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Configuration Error:", error);
        throw error;
    }
}

export const downloadReportAsPDF = async (filename = 'health-report.pdf') => {
    try {
        const element = document.getElementById('report-content');
        if (!element) {
            throw new Error("Report content element not found.");
        }

        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        if (pdfHeight > pdf.internal.pageSize.getHeight()) {
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdf.internal.pageSize.getHeight());
        } else {
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        }

        pdf.save(filename);
    } catch (error) {
        console.log('Error generating PDF:', error);
    }
};
