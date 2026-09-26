import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/admin") || pathname === "/admin/login") {
    return NextResponse.next();
  }
  const allowed = request.cookies.get("vsb_demo_admin")?.value === "1";
  if (!allowed) return NextResponse.redirect(new URL("/admin/login", request.url));
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };
