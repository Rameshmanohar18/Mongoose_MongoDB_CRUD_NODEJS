/**
 * Query helpers: implement .byEmail() and use it
 */
const connectDB = require("../../config/db");
const User = require("../../models/User");

async function main() {
  await connectDB();

  // TODO: use User.find().byEmail('...')

  process.exit(0);
}

main().catch(console.error);
