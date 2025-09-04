/**
 * Student-Course many-to-many: enroll students into courses
 */
const connectDB = require("../../config/db");
const Student = require("../../models/Student");
const Course = require("../../models/Course");

async function main() {
  await connectDB();

  // TODO: create two courses and two students, push course ids into student's enrolledCourses
  // TODO: fetch students with populated enrolledCourses

  process.exit(0);
}

main().catch(console.error);
