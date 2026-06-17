import { NextResponse } from 'next/server';
import { getDb } from '@/lib/firebase/admin';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const db = getDb();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to Firestore
    const docRef = await db.collection('contact_messages').add({
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
      status: 'unread'
    });

    return NextResponse.json(
      { success: true, id: docRef.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
