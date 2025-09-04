/**
 * Create a basic User. Use src/models/User.js
 */
const connectDB = require("../../config/db");
const User = require("../../models/User");

async function main() {
  await connectDB();

  // TODO: create a user with name/email/password

  process.exit(0);
}

main().catch(console.error);
