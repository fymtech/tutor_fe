import { createCookie } from "react-router";
import type { SessionUser, UserRole } from "~/types/auth.types";

// Session cookie configuration
const sessionCookie = createCookie("tutor_session", {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 60 * 60 * 24 * 7, // 7 days
  path: "/",
});

// Serialize user session to cookie
export async function createUserSession(user: SessionUser): Promise<string> {
  return sessionCookie.serialize(JSON.stringify(user));
}

// Parse session from cookie header
export async function getUserSession(request: Request): Promise<SessionUser | null> {
  const cookieHeader = request.headers.get("Cookie");
  if (!cookieHeader) return null;
  
  try {
    const sessionData = await sessionCookie.parse(cookieHeader);
    if (!sessionData) return null;
    return JSON.parse(sessionData) as SessionUser;
  } catch {
    return null;
  }
}

// Get token from session
export async function getAuthToken(request: Request): Promise<string | null> {
  const session = await getUserSession(request);
  return session?.token ?? null;
}

// Check if user is authenticated
export async function isAuthenticated(request: Request): Promise<boolean> {
  const session = await getUserSession(request);
  return session !== null && !!session.token;
}

// Check if user has specific role
export async function hasRole(request: Request, roles: UserRole[]): Promise<boolean> {
  const session = await getUserSession(request);
  if (!session) return false;
  return roles.includes(session.role);
}

// Destroy session (logout)
export async function destroySession(): Promise<string> {
  return sessionCookie.serialize("", { maxAge: 0 });
}

// Require authentication - throws redirect if not authenticated
export async function requireAuth(request: Request, redirectTo: string = "/login") {
  const session = await getUserSession(request);
  if (!session) {
    throw new Response(null, {
      status: 302,
      headers: {
        Location: redirectTo,
      },
    });
  }
  return session;
}

// Require specific role - throws redirect if role doesn't match
export async function requireRole(
  request: Request, 
  roles: UserRole[], 
  redirectTo: string = "/login"
) {
  const session = await requireAuth(request, redirectTo);
  if (!roles.includes(session.role)) {
    throw new Response(null, {
      status: 302,
      headers: {
        Location: redirectTo,
      },
    });
  }
  return session;
}
