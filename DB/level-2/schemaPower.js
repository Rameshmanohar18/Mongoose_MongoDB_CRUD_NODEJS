const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 5 },
  body: String,
  tags: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
  authorEmail: {
    type: String,
    match: /.+\@.+\..+/, // email regex
  },
});

const Blog = mongoose.model("Blog", blogSchema);

async function createBlog() {
  try {
    const blog = new Blog({ title: "Hi", authorEmail: "not-an-email" });
    await blog.save();
  } catch (err) {
    console.log("❌ Validation Error:", err.message);
  }
}

createBlog();
