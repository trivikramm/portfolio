import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // In a real application, you would integrate an email service here.
    // Example: await sendEmail({ to: 'trivikram100699@gmail.com', subject: `New message from ${name}`, body: message });
    
    // Simulating network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Received contact form submission:', { name, email, message });

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
