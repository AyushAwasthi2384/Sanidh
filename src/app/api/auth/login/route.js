// import connectToDatabase from '../../../../utils/db';
// import User from '../../../../models/User.model';
// import { verifyPassword, generateToken } from '../../../../utils/auth';

// export async function POST(req) {
//     await connectToDatabase();
//     const { email, password } = await req.json();

//     const user = await User.findOne({ email });
//     if (!user) {
//         return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
//     }

//     const isValid = await verifyPassword(password, user.password);
//     if (!isValid) {
//         return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });   
//     }

//     const token = generateToken(user);
//     return new Response(JSON.stringify({ message: 'Login successful', token }), { status: 200 });
// }


import connectToDatabase from '../../../../utils/db';
import User from '../../../../models/User.model';
import { verifyPassword, generateToken } from '../../../../utils/auth';
import bcrypt from 'bcrypt';

export async function POST(req) {
    await connectToDatabase();
    const { email, password } = await req.json();

    // Log incoming email and password for verification
    console.log("Login attempt with email:", email);

    const user = await User.findOne({ email });
    console.log("User found:", user);

    if (!user) {
        return new Response(JSON.stringify({ message: 'Invalid credentials: User not found' }), { status: 401 });
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.password);
    console.log("Password valid:", isValid);

    if (!isValid) {
        return new Response(JSON.stringify({ message: 'Invalid credentials: Password mismatch' }), { status: 401 });
    }

    // Generate token
    const token = generateToken(user);
    console.log("Generated Token:", token);

    return new Response(JSON.stringify({ message: 'Login successful', token }), { status: 200 });
}
