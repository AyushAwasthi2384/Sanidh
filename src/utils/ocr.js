// const Tesseract = require('tesseract.js');
// /**
//  * Recognizes text from an image file and structures it, including tables and paragraphs.
//  * @param {string} imagePath - Path to the image file.
//  * @returns {Promise<Object>} Structured OCR data.
//  */
// async function recognizeTextFromImage(imagePath) {
//     try {
//         const result = await Tesseract.recognize(imagePath, 'eng', {
//             logger: (m) => console.log(m), // Optional, logs progress
//         });

//         // Prepare structured data
//         const { text, confidence, words, lines, blocks } = result.data;

//         // Separate paragraphs and tables from blocks
//         const paragraphs = [];
//         const tables = [];

//         blocks.forEach(block => {
//             if (block.text.includes("\n")) { // Rough heuristic to separate paragraphs
//                 paragraphs.push(block.text);
//             } else if (block.type === 'table') { // Detect tables if marked by Tesseract
//                 tables.push(parseTable(block));
//             }
//         });

//         return {
//             fullText: text,
//             confidence: confidence,
//             paragraphs: paragraphs,
//             tables: tables,
//         };
//     } catch (error) {
//         console.error('Error recognizing text:', error);
//         throw new Error('Failed to recognize text');
//     }
// }

// /**
//  * Parses a table block into rows and cells for structured data extraction.
//  * @param {Object} block - Tesseract block object.
//  * @returns {Array<Array<string>>} Parsed table rows.
//  */
// function parseTable(block) {
//     const rows = [];
//     let currentRow = [];

//     block.lines.forEach((line, index) => {
//         const lineText = line.words.map(word => word.text).join(' ');

//         if (index > 0 && line.baseline.y0 !== block.lines[index - 1].baseline.y0) {
//             rows.push(currentRow); // Save completed row
//             currentRow = []; // Start new row
//         }
//         currentRow.push(lineText);
//     });

//     if (currentRow.length) rows.push(currentRow); // Save the last row

//     return rows;
// }

// module.exports = { recognizeTextFromImage };




// const { ocrSpace } = require('ocr-space-api-wrapper');

// export default async function main() {
//     try {
//         const res2 = await ocrSpace('/images/test-img.png', { apiKey: process.env.OCR_SPACE_API });
//     } catch (error) {
//         console.error(error);
//     }
// }