import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ['/login', '/signup', '/home'];
const adminRoutes = ['/categories', '/admin'];

export function middleware(request: NextRequest) {
    
    const currentUser = request.cookies.get("currentUser")?.value;
    const user = currentUser ? JSON.parse(currentUser) : null;
    const roles = user ? user.roles : [];

    if (!publicRoutes.includes(request.nextUrl.pathname) && (!currentUser)){
        const response = NextResponse.redirect(new URL("/login", request.url));
        return response;
    }

    if (adminRoutes.includes(request.nextUrl.pathname) && !roles.includes("admin")){
        const response = NextResponse.redirect(new URL("/login", request.url));
        return response;
    }
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|login|register).*)'
    ]
};