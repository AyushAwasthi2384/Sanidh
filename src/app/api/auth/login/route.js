import bcrypt from 'bcrypt';
import connectToDatabase from '../../../../utils/db';
import User from '../../../../models/User.model.js';

export async function POST(req) {
    try {
        await connectToDatabase();
        const { email, password } = await req.json();

        // Find the user by email
        const user = await User.findOne({ email });
        
        // Check if the user exists
        // if (!user || !user.password) {
        //     return new Response(JSON.stringify({ message: 'Invalid email or password' }), { status: 400 });
        // }

        // Compare the provided password with the stored hashed password
        const isValid = await bcrypt.compare(password, user.password);
        console.log("Password valid:", isValid);

        if (!isValid) {
            return new Response(JSON.stringify({ message: 'Invalid email or password' }), { status: 400 });
        }

        // Continue with session creation or token generation as needed
        return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
        
    } catch (error) {
        console.error("Error during login:", error);
        return new Response(JSON.stringify({ message: 'Error during login' }), { status: 500 });
    }
}
