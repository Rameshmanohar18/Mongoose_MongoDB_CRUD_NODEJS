/**
 * Exercise 01: Create Students Collection
 * - Connect to DB
 * - Create Student model (use src/models/Student.js)
 * - Insert 5 students
 */
const connectDB = require("../../config/db");
const Student = require("../../models/Student");

async function main() {
  await connectDB();

  // TODO: insert 5 students using Student.create or insertMany

  console.log("✅ Done");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
