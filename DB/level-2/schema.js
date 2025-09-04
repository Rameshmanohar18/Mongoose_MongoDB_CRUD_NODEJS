/**
 * Create Product schema with validation
 * - name: required
 * - price: number min 1
 * - tags: [String]
 */
const connectDB = require("../../config/db");
const mongoose = require("mongoose");

async function main() {
  await connectDB();

  // TODO: define schema here or use src/models/Product.js

  process.exit(0);
}

main().catch(console.error);
