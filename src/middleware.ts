import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Allow static files + Next internals
  if (
    pathname.startsWith("/_next") || 
    pathname.startsWith("/api") || 
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 2. Protect course pages
  if (pathname.startsWith("/courses")) {
    // Better-Auth cookie names vary, but usually start with 'better-auth'
    // We check for the session_token specifically.
    const sessionToken = 
      req.cookies.get("better-auth.session_token") || 
      req.cookies.get("skill-sphere.session_token"); // If you set a prefix

    if (!sessionToken) {
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/courses/:path*"],
};