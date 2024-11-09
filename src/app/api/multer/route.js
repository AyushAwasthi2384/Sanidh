// // src/app/api/upload/route.js
// import upload from '../../../utils/multer';
// import { NextResponse } from 'next/server';

// export const POST = async (req, res) => {
//     return new Promise((resolve, reject) => {
//         // Use multer to process single file upload
//         upload.single('file')(req, res, (err) => {
//             if (err) {
//                 console.error('Upload error:', err);
//                 return resolve(NextResponse.json({ error: err.message }, { status: 500 }));
//             }

//             if (!req.file) {
//                 return resolve(NextResponse.json({ error: 'File not uploaded' }, { status: 400 }));
//             }

//             // File info available in req.file
//             console.log('Uploaded file:', req.file);

//             return resolve(
//                 NextResponse.json({
//                     message: 'File uploaded successfully',
//                     filePath: `/uploads/${req.file.filename}`,
//                 })
//             );
//         });
//     });
// };



import multer from "multer";
import nextConnect from "next-connect";

// Set up Multer storage
const storage = multer.diskStorage({
    destination: "public/uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// Initialize next-connect middleware
const handler = nextConnect({
    onError(error, req, res) {
        res.status(500).json({ error: `Error uploading file: ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    },
});

// Use Multer to handle the single file upload under the field name `file`
handler.use(upload.single("file"));

// Define the POST function for handling uploads
export async function POST(req, res) {
    if (req.file) {
        res.status(200).json({
            message: "File uploaded successfully",
            filePath: `/uploads/${req.file.filename}`,
        });
    } else {
        res.status(400).json({ error: "File not uploaded" });
    }
}

// Prevent Next.js from parsing this API route by setting bodyParser to false
export const config = {
    api: {
        bodyParser: false,
    },
};

// Export the handler as the default export for compatibility with next-connect
export default handler;
