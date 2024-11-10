import axios from 'axios';

const GEMINI_API_KEY = process.env.GEMINI_API;
const GEMINI_API_URL = process.env.GEMINI_URL;

/**
 * Fetch response from Gemini API based on provided prompt.
 * @param {string} prompt - The prompt to send to the Gemini API.
 * @returns {Promise<object>} - Returns a response object from Gemini API.
 */
export async function fetchGeminiResponse(prompt) {
    try {
        const response = await axios.post(
            GEMINI_API_URL,
            { prompt, "Taking all this data, generate a report of a patient in order to guide him about his health and guide if he needs to go to a doctor and precautions before that" },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${GEMINI_API_KEY}`,
                },
            }
        );

        return response.data;  // Adjust based on Gemini API response structure
    } catch (error) {
        console.error("Error fetching Gemini response:", error);
        throw new Error("Failed to fetch response from Gemini API");
    }
}
