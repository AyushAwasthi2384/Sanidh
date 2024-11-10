import User from '../../../../../models/User.model'
import connectToDatabase from '../../../../../utils/db';

export async function GET(req) {
    await connectToDatabase();
    const { userId } = req.json();

    if (userId) {
        const user = await User.findById(userId);
        if (!user) {
            return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
        }
        return new Response(JSON.stringify(user), { status: 200 });
    }

    const users = await User.find();
    return new Response(JSON.stringify(users), { status: 200 });
}