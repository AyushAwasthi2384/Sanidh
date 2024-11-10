import connectToDatabase from '../../../../utils/db';
import Session from '../../../../models/Session.model';

export async function GET(req) { // Find Session by ID
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('id');

    if (!sessionId) {
        return new Response(JSON.stringify({ message: 'Session ID is required' }), { status: 400 });
    }

    const session = await Session.findById(sessionId);
    if (!session) {
        return new Response(JSON.stringify({ message: 'Session not found' }), { status: 404 });
    }

    return new Response(JSON.stringify(session), { status: 200 });
}
