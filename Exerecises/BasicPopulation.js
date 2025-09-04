const mongoose = require("mongoose");
require("dotenv").config();

const User = require("../DB/models/user");
const Post = require("../DB/models/post");

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ Connected");

  await User.deleteMany({});
  await Post.deleteMany({});

  const ramesh = await User.create({
    name: "Ramesh",
    email: "ramesh@test.com",
  });
  const suresh = await User.create({
    name: "Suresh",
    email: "suresh@test.com",
  });

  await Post.create([
    { title: "Intro Post", content: "Hello World!", author: ramesh._id },
    { title: "Learning", content: "Mongoose Rocks!", author: suresh._id },
  ]);

  const posts = await Post.find().populate("author", "name email -_id");

  console.log("📌 Populated Posts:");
  console.log(JSON.stringify(posts, null, 2));

  mongoose.connection.close();
}

main();
