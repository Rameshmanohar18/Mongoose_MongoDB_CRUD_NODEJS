// const emp1 = new Employee({
//   name: "Ramesh",
//   age: 25,
//   role: "Frontend Developer",
//   isActive: true,
// });

// await emp1.save(); // saves to DB

// const employees = await Employee.find(); // get all
// const oneEmp = await Employee.findOne({ name: "Ramesh" });

// // Update
// await Employee.updateOne({ name: "Ramesh" }, { $set: { age: 26 } });

// // Delete

// await Employee.deleteOne({ name: "Ramesh" });

const mongoose = require("mongoose");

// connect
mongoose.connect("mongodb://127.0.0.1:27017/playground");

// schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);

// Create
async function createUser() {
  const user = new User({ name: "Ramesh", age: 25, email: "ram@example.com" });
  await user.save();
  console.log("✅ User saved:", user);
}

// Read
async function readUsers() {
  const users = await User.find();
  console.log("📜 All Users:", users);
}

// Update
async function updateUser() {
  const updated = await User.updateOne(
    { name: "Ramesh" },
    { $set: { age: 26 } }
  );
  console.log("🔄 Updated:", updated);
}

// Delete
async function deleteUser() {
  const deleted = await User.deleteOne({ name: "Ramesh" });
  console.log("🗑️ Deleted:", deleted);
}

createUser();
