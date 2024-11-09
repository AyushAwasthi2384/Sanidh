import connectToDatabase from '../../../utils/db';
import Session from '../../../models/Session.model';

export async function POST(req) {
    await connectToDatabase();
    const sessionData = await req.json();
    const newSession = new Session(sessionData);
    await newSession.save();
    return new Response(JSON.stringify(newSession), { status: 201 });
}

export async function GET(req) {
    await connectToDatabase();
    const sessions = await Session.find();
    return new Response(JSON.stringify(sessions), { status: 200 });
}

export async function PUT(req) {
    await connectToDatabase();
    const { id, ...updateData } = await req.json();
    const updatedSession = await Session.findByIdAndUpdate(id, updateData, { new: true });
    return new Response(JSON.stringify(updatedSession), { status: 200 });
}

export async function DELETE(req) {
    await connectToDatabase();
    const { id } = await req.json();
    await Session.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: 'Session deleted successfully' }), { status: 200 });
}
