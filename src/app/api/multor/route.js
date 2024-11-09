// src/app/api/upload/route.js
import Multor from "multor-sdk";

const multor = new Multor({
    apiKey: process.env.MULTOR_API_KEY, // Add your Multor API key in your environment variables
});

export async function POST(req) {
    try {
        const form = await req.formData();
        const file = form.get("file");

        // Upload file to Multor
        const response = await multor.uploadFile(file);

        if (response.success) {
            return new Response(JSON.stringify({ message: "File uploaded successfully", fileUrl: response.fileUrl }), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        } else {
            return new Response(JSON.stringify({ error: "Failed to upload file" }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }
    } catch (error) {
        console.error("Upload error:", error);
        return new Response(JSON.stringify({ error: "Server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
