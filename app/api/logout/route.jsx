import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json(
    {
      code: 1,
      message: "Logout successful!",
    },
    { status: 200 }
  );

  response.cookies.set("aubadeauthcookies", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });

  return response;
}
