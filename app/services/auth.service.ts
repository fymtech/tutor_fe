import { environment } from "~/environments/environment";
import type {
  LoginRequest,
  AuthResponse,
  RegisterRequest,
  UserType,
  AdminRegisterRequest,
  StudentRegisterRequest,
  TutorRegisterRequest,
} from "~/types/auth.types";

const API_BASE = environment.apiBaseUrl;

// Register Admin
export async function registerAdmin(data: AdminRegisterRequest): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE}/auth/register/admin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

// Register Student
export async function registerStudent(data: StudentRegisterRequest): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE}/auth/register/student`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

// Register Tutor
export async function registerTutor(data: TutorRegisterRequest): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE}/auth/register/tutor`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

// Generic register function
export async function register(data: RegisterRequest): Promise<AuthResponse> {
  switch (data.role) {
    case "ADMIN":
      return registerAdmin(data as AdminRegisterRequest);
    case "STUDENT":
      return registerStudent(data as StudentRegisterRequest);
    case "TUTOR":
      return registerTutor(data as TutorRegisterRequest);
    default:
      throw new Error("Invalid role");
  }
}

// Login
export async function login(userType: UserType, data: LoginRequest): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE}/auth/${userType}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

// Logout
export async function logout(userType: UserType, token: string): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE}/auth/${userType}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });
  return response.json();
}

// Helper to get user type from role
export function roleToUserType(role: string): UserType {
  switch (role.toUpperCase()) {
    case "ADMIN":
      return "admin";
    case "STUDENT":
      return "student";
    case "TUTOR":
      return "tutor";
    default:
      return "student";
  }
}

// Helper to get dashboard path from role
export function getDashboardPath(role: string): string {
  switch (role.toUpperCase()) {
    case "ADMIN":
      return "/admin";
    case "STUDENT":
      return "/student";
    case "TUTOR":
      return "/tutor";
    default:
      return "/";
  }
}
