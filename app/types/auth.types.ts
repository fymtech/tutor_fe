// User Types
export type UserRole = 'ADMIN' | 'STUDENT' | 'TUTOR';
export type Gender = 'MALE' | 'FEMALE' | 'OTHER';
export type DeviceType = 1 | 2 | 3; // 1: iOS, 2: Android, 3: Web

// Guardian Info (for students)
export interface GuardianInfo {
  name: string;
  relation: string;
  countryCode: string;
  contactNumber: string;
  identityNumber: string;
}

// Base User interface
export interface BaseUser {
  id?: string;
  name: string;
  email: string;
  gender: Gender;
  dateOfBirth: string;
  countryCode: string;
  phone: string;
  countryId: string;
  stateId: string;
  cityId: string;
  address: string;
  postalCode: string;
  role: UserRole;
  identityNumber: string;
  deviceType: DeviceType;
  locale: string;
  profileImage: string;
  referralCode?: string;
}

// Admin User
export interface AdminUser extends BaseUser {
  role: 'ADMIN';
}

// Student User
export interface StudentUser extends BaseUser {
  role: 'STUDENT';
  gaurdianInfo?: GuardianInfo;
}

// Tutor User
export interface TutorUser extends BaseUser {
  role: 'TUTOR';
}

export type User = AdminUser | StudentUser | TutorUser;

// Registration Request Types
export interface BaseRegisterRequest {
  name: string;
  email: string;
  gender: Gender;
  dateOfBirth: string;
  countryCode: string;
  phone: string;
  password: string;
  countryId: string;
  stateId: string;
  cityId: string;
  address: string;
  postalCode: string;
  identityNumber: string;
  deviceType: DeviceType;
  locale: string;
  profileImage: string;
  referralCode?: string;
}

export interface AdminRegisterRequest extends BaseRegisterRequest {
  role: 'ADMIN';
}

export interface StudentRegisterRequest extends BaseRegisterRequest {
  role: 'STUDENT';
  gaurdianInfo?: GuardianInfo;
}

export interface TutorRegisterRequest extends BaseRegisterRequest {
  role: 'TUTOR';
}

export type RegisterRequest = AdminRegisterRequest | StudentRegisterRequest | TutorRegisterRequest;

// Login Request
export interface LoginRequest {
  email: string;
  password: string;
  deviceType?: DeviceType;
}

// Auth Response
export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    user: User;
    token: string;
    refreshToken?: string;
  };
  error?: string;
}

// Session User (stored in cookie/session)
export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profileImage: string;
  token: string;
}

// User Type for login routing
export type UserType = 'admin' | 'student' | 'tutor';
