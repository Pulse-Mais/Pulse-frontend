import { NextResponse, type NextRequest } from "next/server";
// import { withAuth } from "next-auth/middleware"

// const roleAcess = {
//   admin: ["/"],
//   mentor: ["mentor"],
//   student: ["/"]
// }

export function middleware(req: NextRequest) {
  if(req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/signin", req.url))
  }

  if(req.nextUrl.pathname === "/dashboard") {}

    // Redirect to /signin if not authenticated
    // if(true) {
    //   return NextResponse.next()
    // }
  
  return NextResponse.redirect(new URL("/signin", req.url))
}

export const config = {
  matcher: [
    "/", "/dashboard/:path*"
  ]
}