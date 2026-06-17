import { NextResponse } from 'next/server';
import { getDb } from '@/lib/firebase/admin';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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

    // Send email notification using Resend
    if (resend && process.env.NOTIFICATION_EMAIL) {
      try {
        await resend.emails.send({
          from: 'Contact Form <onboarding@resend.dev>',
          to: process.env.NOTIFICATION_EMAIL,
          subject: `New Contact Message from ${name}`,
          html: `
            <h3>New message from your website!</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br/>')}</p>
          `,
        });
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
      }
    } else {
      console.warn('Skipping email: RESEND_API_KEY or NOTIFICATION_EMAIL not set.');
    }

    return NextResponse.json(
      { success: true, id: docRef.id },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error saving contact message:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message || String(error) },
      { status: 500 }
    );
  }
}
