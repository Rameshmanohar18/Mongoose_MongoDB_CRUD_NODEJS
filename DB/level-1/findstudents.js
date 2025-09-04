/**
 * Exercise 02: Find & Filter
 * - Find students older than 18
 * - Find students whose name starts with 'R'
 */
const connectDB = require("../../config/db");
const Student = require("../../models/Student");

async function main() {
  await connectDB();

  // TODO: query Student.find({ age: { $gt: 18 } }) and regex name search

  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
