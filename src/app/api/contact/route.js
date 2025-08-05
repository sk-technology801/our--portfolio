// src/app/api/contact/route.js
import { connectDB } from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    await connectDB();
    await Contact.create({ name, email, message });

    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
