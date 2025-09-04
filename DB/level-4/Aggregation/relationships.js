const authorSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const Author = mongoose.model("Author", authorSchema);

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
});
const Post = mongoose.model("Post", postSchema);

async function createPost() {
  const author = new Author({ name: "Ramesh", email: "ram@dev.com" });
  await author.save();

  const post = new Post({
    title: "Mongoose Guide",
    content: "Learning Populate",
    author: author._id,
  });
  await post.save();

  const populatedPost = await Post.find().populate("author");
  console.log("📝 Post with Author:", populatedPost);
}

createPost();
