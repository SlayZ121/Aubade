import { NextResponse } from "next/server";
import { createUser } from "@/app/database/queries/userQueries";
import { generateToken } from "@/app/utils/jwt";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return NextResponse.json(
        { code: 0, message: "Email and password are required.", data: null },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { code: 0, message: "Invalid email format.", data: null },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        {
          code: 0,
          message: "Password must be at least 6 characters.",
          data: null,
        },
        { status: 400 }
      );
    }

    const user = await createUser({ email, password, name }); // password already hashed here
    const token = await generateToken({ id: user._id, email: user.email });

    const response = NextResponse.json(
      { code: 1, message: "User created successfully.", data: user },
      { status: 201 }
    );

    response.cookies.set("aubadeauthcookies", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 48,
    });

    return response;
  } catch (err) {
    return NextResponse.json(
      { code: 0, message: err.message || "Internal server error", data: null },
      { status: 500 }
    );
  }
}
