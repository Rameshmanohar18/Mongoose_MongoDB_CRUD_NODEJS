/**
 * Update & Delete
 * - Update a user's email by ID
 * - Delete users with age < 20
 */
const connectDB = require("../../config/db");
const User = require("../../models/User");

async function main() {
  await connectDB();

  // TODO: updateOne and deleteMany

  process.exit(0);
}

main().catch(console.error);
