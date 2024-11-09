import { recognizeTextFromImage } from '../../../utils/ocr';

export async function POST(req) {
    try {
        const { imagePath } = await req.json();

        if (!imagePath) {
            return new Response(JSON.stringify({ status: 'error', message: 'Image path is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Perform OCR on the image at the given path
        const ocrData = await recognizeTextFromImage(imagePath);

        return new Response(JSON.stringify({ status: 'success', data: ocrData }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('OCR processing error:', error);
        return new Response(JSON.stringify({ status: 'error', message: 'OCR failed' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
