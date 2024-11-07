import connectToDatabase from '../../../../utils/db';
import User from '../../../../models/User.model';
import { hashPassword } from '../../../../utils/auth';

export async function POST(req) {
    await connectToDatabase();
    const { email, password, firstName, lastName } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return new Response(JSON.stringify({ message: 'User already exists' }), { status: 409 });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    return new Response(JSON.stringify({ message: 'User created successfully', userId: newUser._id }), { status: 200 });
}
