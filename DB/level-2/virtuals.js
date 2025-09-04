/**
 * Virtuals: add fullName to User
 */
const connectDB = require("../../config/db");
const User = require("../../models/User");

async function main() {
  await connectDB();

  // TODO: create user with firstName and lastName then console.log user.fullName

  process.exit(0);
}

main().catch(console.error);
