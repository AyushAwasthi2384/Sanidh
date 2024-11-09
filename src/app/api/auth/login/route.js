import connectToDatabase from '../../../../utils/db';
import User from '../../../../models/User.model';
import { verifyPassword, generateToken } from '../../../../utils/auth';

export async function POST(req) {
    await connectToDatabase();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
        return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
    }

    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
        return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });   
    }

    const token = generateToken(user);
    return new Response(JSON.stringify({ message: 'Login successful', token }), { status: 200 });
}
