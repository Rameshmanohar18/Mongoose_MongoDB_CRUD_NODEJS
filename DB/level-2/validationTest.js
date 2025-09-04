/**
 * Test validation by attempting invalid saves
 */
const connectDB = require("../../config/db");
// TODO import Product model

async function main() {
  await connectDB();

  // TODO: try saving negative price

  process.exit(0);
}

main().catch(console.error);
