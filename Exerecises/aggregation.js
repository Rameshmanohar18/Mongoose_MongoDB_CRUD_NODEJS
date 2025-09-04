// Total sales per product

const results = await Order.aggregate([
  {
    $group: {
      _id: "$product",
      totalSales: { $sum: { $multiply: ["$quantity", "$price"] } },
      totalUnits: { $sum: "$quantity" },
    },
  },
  { $sort: { totalSales: -1 } },
]);

console.log(results);

// Monthly revenue report
