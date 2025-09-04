/**
 * Group sales by item and compute total revenue
 */
const connectDB = require("../../config/db");
const Sale = require("../../models/Sale");

async function main() {
  await connectDB();

  // TODO: use aggregate with $group and $sum

  process.exit(0);
}

main().catch(console.error);
