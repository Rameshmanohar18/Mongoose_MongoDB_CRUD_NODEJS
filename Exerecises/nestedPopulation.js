const mongoose = require("mongoose");
require("dotenv").config();

const User = require("../DB/models/user");
const Post = require("../DB/models/post");
const Comment = require("../DB/models/comment");

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ Connected");

  await User.deleteMany({});
  await Post.deleteMany({});
  await Comment.deleteMany({});

  const ramesh = await User.create({
    name: "Ramesh",
    email: "ramesh@test.com",
  });
  const suresh = await User.create({
    name: "Suresh",
    email: "suresh@test.com",
  });

  const post1 = await Post.create({
    title: "Nested Pop Example",
    content: "Let’s go deeper!",
    author: ramesh._id,
  });

  await Comment.create([
    { text: "Great post!", post: post1._id, user: suresh._id },
    { text: "Thanks bro!", post: post1._id, user: ramesh._id },
  ]);

  const posts = await Post.find()
    .populate("author", "name email -_id")
    .populate({
      path: "comments", // 👈 will come from virtual (see next section)
      populate: { path: "user", select: "name email -_id" },
    });

  console.log("📌 Posts with Comments & User:");
  console.log(JSON.stringify(posts, null, 2));

  mongoose.connection.close();
}

main();
