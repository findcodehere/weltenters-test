import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { code } = body;

        // Validate the request body
        if (!code) {
            return NextResponse.json(
                {
                    message: "Request body is invalid. 'code' is required.",
                },
                { status: 400 }
            );
        }

        // Business logic: Check if the code is correct
        if (code === 1234) {
            return NextResponse.json(
                {
                    message: 'Verification successful.',
                },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                {
                    message: 'Invalid verification code.',
                },
                { status: 400 }
            );
        }
    } catch {
        return NextResponse.json(
            {
                status: 'error',
                message: 'Internal server error.',
            },
            { status: 500 }
        );
    }
}
