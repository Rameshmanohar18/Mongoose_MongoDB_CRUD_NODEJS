console.log("September 1 learning Mongoosejs form youtuber Balachandra");
console.log(
  "Hello Mongoose:-  Schema,model, query only learning in mongoose JS "
);

const mongoose = require("mongoose");

// const customer = require("./customer");
// const employeeSchema = require("./Employees");

main().catch((err) => console.log(err));

// Main function to execute the schemas
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/testdb");



  
  // const customerSchema = await customer.create({
  //   name: "Ramsh",
  //   age: 24.7,
  //   city: "Dindigul",
  //   // address: "62,Nethaji nagar , Nagal nagar,mettupatty road 624003 ",
  //   phoneNo: 7010251221,
  //   Learning: "Mongoose in september",
  //   Youtube: "Balachandra",
  //   Job: "Programmer",
  // });

  // customerSchema.name = "Dave grey webdevelopment"; //name was updated here!

  // const newEmp = new employeeSchema({
  //   name: "Ramesh Kumar",
  //   email: "ramesh@example.com",
  //   age: 24,
  //   department: "Engineering",
  //   position: "Full Stack Developer",
  //   salary: 600000,
  // });

  // newEmp.save();
}






















