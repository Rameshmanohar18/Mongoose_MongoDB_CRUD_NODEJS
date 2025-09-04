const orderSchema = new mongoose.Schema({
  product: String,
  quantity: Number,
});

// pre hook
orderSchema.pre("save", function (next) {
  console.log("🔧 Before saving order:", this.product);
  next();
});

// post hook
orderSchema.post("save", function (doc) {
  console.log("✅ Order saved:", doc.product);
});

const Order = mongoose.model("Order", orderSchema);

async function createOrder() {
  const order = new Order({ product: "Phone", quantity: 2 });
  await order.save();
}

createOrder();
