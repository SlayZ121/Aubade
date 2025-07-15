import { NextResponse } from "next/server";
import { verifyToken } from "@/app/utils/jwt";

const publicRoutes = ["/", "/about", "/login", "/signup"];
const openApiRoutes = [
  "/api/auth/login",
  "/api/auth/signup",
  "/api/auth/check",
];
const openApiPrefix = "/api/website";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("aubadeauthcookies")?.value;

  const isApi = pathname.startsWith("/api");
  const isPublicPage = publicRoutes.includes(pathname);
  const isOpenApi =
    openApiRoutes.includes(pathname) || pathname.startsWith(openApiPrefix);

  if (isApi) {
    if (isOpenApi) return NextResponse.next();

    const authHeader = request.headers.get("authorization");
    const jwtToken = authHeader?.split(" ")[1];
    if (!jwtToken) {
      return NextResponse.json(
        { error: "JWT missing in header" },
        { status: 401 }
      );
    }

    try {
      await verifyToken(jwtToken);
      return NextResponse.next();
    } catch (err) {
      return NextResponse.json({ error: "Invalid Token" }, { status: 401 });
    }
  }

  if (!isPublicPage) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      await verifyToken(token);
    } catch (err) {
      console.error("Token invalid:", err);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    if ((pathname === "/login" || pathname === "/signup") && token) {
      try {
        await verifyToken(token);
        return NextResponse.redirect(new URL("/", request.url));
      } catch (err) {
        console.log(err);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
