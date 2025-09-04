const saleSchema = new mongoose.Schema({
  item: String,
  price: Number,
  quantity: Number,
});
const Sale = mongoose.model("Sale", saleSchema);

async function runAggregation() {
  await Sale.insertMany([
    { item: "Pen", price: 10, quantity: 5 },
    { item: "Book", price: 50, quantity: 2 },
    { item: "Pen", price: 10, quantity: 3 },
  ]);

  const result = await Sale.aggregate([
    {
      $group: {
        _id: "$item",
        totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } },
      },
    },
  ]);

  console.log("📊 Revenue per item:", result);
}

runAggregation();
