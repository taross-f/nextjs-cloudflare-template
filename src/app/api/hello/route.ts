export const runtime = 'edge';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    message: 'Hello from the API!',
    timestamp: new Date().toISOString()
  });
}
