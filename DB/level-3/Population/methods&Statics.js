const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});

// instance method
productSchema.methods.discountedPrice = function (percent) {
  return this.price - (this.price * percent) / 100;
};

// static method
productSchema.statics.findByCategory = function (cat) {
  return this.find({ category: cat });
};

const Product = mongoose.model("Product", productSchema);

async function play() {
  const p1 = new Product({
    name: "Laptop",
    price: 50000,
    category: "Electronics",
  });
  await p1.save();

  console.log("💸 Discounted Price:", p1.discountedPrice(10));

  const electronics = await Product.findByCategory("Electronics");
  console.log("📦 Electronics:", electronics);
}

play();
