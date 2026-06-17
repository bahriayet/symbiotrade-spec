import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, company_name, role } = body;

    // Validate request
    if (!email || !password || !company_name || !role) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // This is a mockup registration logic.
    // In a real application, you would hash the password and use Prisma to save to DB.

    // Mock user created response
    const mockUser = {
      id: "mock-uuid-1234",
      email,
      role,
      company: {
        company_name,
        verification_status: "PENDING"
      }
    };

    return NextResponse.json({
      message: 'User registered successfully (MOCK)',
      user: mockUser
    }, { status: 201 });

  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
