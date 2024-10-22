import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getCurrentUser } from "./services/AuthService";

const AuthRoutes = ["/login", "/register"];

// Define role-based routes
const roleBasedRoutes: any = {
  user: [/^\/profile/, /^\/room/],
  admin: [/^\/admin/, /^\/room/],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Fetch the current user
  const user = await getCurrentUser();

  // If there is no user (not logged in)
  if (!user) {
    // Allow access to auth routes
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    }

    // Redirect to login if trying to access any protected routes, including /room
    if (pathname.match(/^\/room/)) {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }

    // Redirect to login for any other non-auth routes
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }

  // Check if the user has a role and can access the route
  if (user.role && roleBasedRoutes[user.role]) {
    const routes = roleBasedRoutes[user.role];

    // Allow access if the user is authorized for the route
    if (routes.some((route: any) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  // If user is logged in but tries to access restricted areas, handle accordingly
  if (user.role === "admin" && pathname.match(/^\/profile/)) {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect admin trying to access profile
  }

  if (user.role === "user" && pathname.match(/^\/admin/)) {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect user trying to access admin
  }

  // Default redirection if no conditions are met
  return NextResponse.redirect(new URL("/", request.url));
}

// Configuration for middleware matcher
export const config = {
  matcher: ["/room/:page*", "/profile", "/admin", "/login", "/register"],
};
