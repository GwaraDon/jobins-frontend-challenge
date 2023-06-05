import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // if (request.nextUrl.pathname.startsWith("/main-menu")) {
  //   return NextResponse.rewrite(new URL("/main-menu/dashboard", request.url));
  // }
}
