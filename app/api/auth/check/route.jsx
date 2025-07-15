import { NextResponse } from "next/server";
import { verifyToken } from "@/app/utils/jwt";

export async function GET(request) {
  try {
    const token = request.cookies.get("aubadeauthcookies")?.value;

    if (!token) {
      return NextResponse.json(
        { code: 0, message: "No token found" },
        { status: 401 }
      );
    }

    const decoded = await verifyToken(token);

    return NextResponse.json({ code: 1, data: decoded }, { status: 200 });
  } catch (error) {
    console.error("Auth Check Error:", error.message);
    return NextResponse.json(
      { code: 0, message: "Invalid or expired token" },
      { status: 401 }
    );
  }
}
