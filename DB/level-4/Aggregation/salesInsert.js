/**
 * Insert sample sales data
 */
const connectDB = require("../../config/db");
const Sale = require("../../models/Sale");

async function main() {
  await connectDB();

  // TODO: insert sample Sale docs

  process.exit(0);
}

main().catch(console.error);
