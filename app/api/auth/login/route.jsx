import { NextResponse } from "next/server";
import { loginUser } from "@/app/database/queries/userQueries";
import { generateToken } from "@/app/utils/jwt";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          code: 0,
          message: "Email and password are required.",
          data: null,
        },
        { status: 400 }
      );
    }

    const user = await loginUser({ email, password });

    const token = await generateToken({ id: user._id, email: user.email });

    const response = NextResponse.json(
      {
        code: 1,
        message: "Login successful.",
        data: user,
        token,
      },
      { status: 200 }
    );

    response.cookies.set("aubadeauthcookies", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 2,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        code: 0,
        message: error.message || "Login failed.",
        data: null,
      },
      { status: 401 }
    );
  }
}
