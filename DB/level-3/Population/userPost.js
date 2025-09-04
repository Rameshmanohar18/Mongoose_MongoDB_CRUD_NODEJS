/**
 * Create Users and Posts, link them and populate
 */
const connectDB = require("../../config/db");
const User = require("../../models/User");
const Post = require("../../models/Post");

async function main() {
  await connectDB();

  // TODO: create a user, create two posts with author: user._id
  // TODO: fetch Post.find().populate('author') and console.log

  process.exit(0);
}

main().catch(console.error);
