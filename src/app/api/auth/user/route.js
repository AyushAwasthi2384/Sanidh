import connectToDatabase from '../../../../utils/db';
import User from '../../../../models/User.model.js';

export async function GET(req) {
    try {
        await connectToDatabase();
        const users = await User.find();
        
        console.log("Fetched users:", users); // Log the fetched users for debugging

        return new Response(JSON.stringify(users), { status: 200 });
    } catch (error) {
        console.error("Error fetching users:", error);
        return new Response(JSON.stringify({ message: 'Error fetching users' }), { status: 500 });
    }
}


export async function PUT(req) {
    await connectToDatabase();
    const { id, ...updateData } = await req.json();
    const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });
    return new Response(JSON.stringify(updatedUser), { status: 200 });
}

export async function DELETE(req) {
    await connectToDatabase();
    const { id } = await req.json();
    await User.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: 'User deleted successfully' }), { status: 200 });
}

export async function PATCH(req) {
    try {
        await connectToDatabase();
        const { id, sessions } = await req.json();

        if (![0, 1, 2, 3].includes(sessions)) {
            return new Response(JSON.stringify({ message: 'Invalid sessions value' }), { status: 400 });
        }

        // Update the sessions field in the User model
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { sessions },
            { new: true }
        );

        if (!updatedUser) {
            return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
        }

        return new Response(JSON.stringify(updatedUser), { status: 200 });
    } catch (error) {
        console.error("Error updating sessions field:", error);
        return new Response(JSON.stringify({ message: 'Error updating sessions field' }), { status: 500 });
    }
}