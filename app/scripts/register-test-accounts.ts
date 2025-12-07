/**
 * Test Account Registration Script
 * 
 * This file contains functions to register 3 test accounts:
 * - 1 Admin
 * - 1 Student
 * - 1 Tutor
 * 
 * Common password for all: "TutorHub@123"
 * 
 * Run this file with: npx tsx app/scripts/register-test-accounts.ts
 */

import { 
  registerAdmin, 
  registerStudent, 
  registerTutor 
} from "../services/auth.service";
import type { 
  AdminRegisterRequest, 
  StudentRegisterRequest, 
  TutorRegisterRequest 
} from "../types/auth.types";

const COMMON_PASSWORD = "TutorHub@123";

// Common location IDs (these should be replaced with actual IDs from your database)
const LOCATION = {
  countryId: "69354e14451be086d3f64702",
  stateId: "693550ac451be086d3f64705",
  cityId: "693550d2451be086d3f64706",
};

const adminData: AdminRegisterRequest = {
  name: "Admin User",
  email: "admin@tutorhub.com",
  gender: "MALE",
  dateOfBirth: "1985-06-15",
  countryCode: "+91",
  phone: "9876543210",
  password: COMMON_PASSWORD,
  countryId: LOCATION.countryId,
  stateId: LOCATION.stateId,
  cityId: LOCATION.cityId,
  address: "123 Admin Street, Tech Park",
  postalCode: "500001",
  role: "ADMIN",
  identityNumber: "AD001234",
  deviceType: 3,
  locale: "en",
  profileImage: "default.png",
  referralCode: "ADMIN-001",
};

const studentData: StudentRegisterRequest = {
  name: "Alex Johnson",
  email: "student@tutorhub.com",
  gender: "MALE",
  dateOfBirth: "2005-03-20",
  countryCode: "+91",
  phone: "9876543211",
  password: COMMON_PASSWORD,
  countryId: LOCATION.countryId,
  stateId: LOCATION.stateId,
  cityId: LOCATION.cityId,
  address: "456 Student Lane, Academic City",
  postalCode: "500002",
  role: "STUDENT",
  identityNumber: "ST001234",
  deviceType: 3,
  locale: "en",
  profileImage: "default.png",
  referralCode: "STU-001",
  gaurdianInfo: {
    name: "Jane Johnson",
    relation: "Mother",
    countryCode: "+91",
    contactNumber: "9876543212",
    identityNumber: "GD001234",
  },
};

const tutorData: TutorRegisterRequest = {
  name: "Dr. Sarah Miller",
  email: "tutor@tutorhub.com",
  gender: "FEMALE",
  dateOfBirth: "1990-08-10",
  countryCode: "+91",
  phone: "9876543213",
  password: COMMON_PASSWORD,
  countryId: LOCATION.countryId,
  stateId: LOCATION.stateId,
  cityId: LOCATION.cityId,
  address: "789 Tutor Avenue, Education Hub",
  postalCode: "500003",
  role: "TUTOR",
  identityNumber: "TU001234",
  deviceType: 3,
  locale: "en",
  profileImage: "default.png",
  referralCode: "TUT-001",
};

async function registerTestAccounts() {
  console.log("🚀 Starting test account registration...\n");

  // Register Admin
  console.log("📋 Registering Admin...");
  try {
    const adminResult = await registerAdmin(adminData);
    if (adminResult.success) {
      console.log("✅ Admin registered successfully!");
      console.log(`   Email: ${adminData.email}`);
    } else {
      console.log(`❌ Admin registration failed: ${adminResult.message}`);
    }
  } catch (error) {
    console.log(`❌ Admin registration error: ${error}`);
  }

  // Register Student
  console.log("\n📋 Registering Student...");
  try {
    const studentResult = await registerStudent(studentData);
    if (studentResult.success) {
      console.log("✅ Student registered successfully!");
      console.log(`   Email: ${studentData.email}`);
    } else {
      console.log(`❌ Student registration failed: ${studentResult.message}`);
    }
  } catch (error) {
    console.log(`❌ Student registration error: ${error}`);
  }

  // Register Tutor
  console.log("\n📋 Registering Tutor...");
  try {
    const tutorResult = await registerTutor(tutorData);
    if (tutorResult.success) {
      console.log("✅ Tutor registered successfully!");
      console.log(`   Email: ${tutorData.email}`);
    } else {
      console.log(`❌ Tutor registration failed: ${tutorResult.message}`);
    }
  } catch (error) {
    console.log(`❌ Tutor registration error: ${error}`);
  }

  console.log("\n" + "=".repeat(50));
  console.log("📝 TEST CREDENTIALS");
  console.log("=".repeat(50));
  console.log("\n🔐 Common Password: " + COMMON_PASSWORD);
  console.log("\n👤 Admin:");
  console.log(`   Email: admin@tutorhub.com`);
  console.log(`   Login URL: /admin/login`);
  console.log("\n🎓 Student:");
  console.log(`   Email: student@tutorhub.com`);
  console.log(`   Login URL: /login (select Student)`);
  console.log("\n👨‍🏫 Tutor:");
  console.log(`   Email: tutor@tutorhub.com`);
  console.log(`   Login URL: /login (select Tutor)`);
  console.log("\n" + "=".repeat(50));
}

// Export for use in other files
export { 
  adminData, 
  studentData, 
  tutorData, 
  COMMON_PASSWORD,
  registerTestAccounts 
};

// Run if executed directly
if (typeof require !== "undefined" && require.main === module) {
  registerTestAccounts();
}
