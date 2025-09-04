Alright 🔥 now we’re diving into **Aggregation in MongoDB** — this is where Mongo really shines for analytics, reporting, and transforming data.

Think of **Aggregation** as MongoDB’s version of SQL’s `GROUP BY`, `SUM`, `AVG`, `JOIN`, but way more flexible.
We build **pipelines** where documents flow through multiple stages (`$match`, `$group`, `$sort`, etc.).

---

## 🧱 Basic Building Blocks

- `$match` → filter (like `WHERE`)
- `$group` → group & aggregate (like `GROUP BY`)
- `$project` → shape the output (like `SELECT col1, col2`)
- `$sort` → sort results
- `$limit` / `$skip` → pagination
- `$lookup` → join with another collection
- `$unwind` → flatten arrays

---

## 📘 Example Models

Let’s use a mini **E-commerce dataset**.

### `models/Order.js`

```js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: String,
  product: String,
  quantity: Number,
  price: Number, // per unit
  status: { type: String, enum: ["pending", "shipped", "delivered"] },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
```

---

## 🚀 Aggregation Examples

### 1. Total Sales per Product

```js
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
```

👉 Output:

```json
[
  { "_id": "Laptop", "totalSales": 2500, "totalUnits": 5 },
  { "_id": "Phone", "totalSales": 1500, "totalUnits": 3 }
]
```

---

### 2. Monthly Revenue Report

```js
const results = await Order.aggregate([
  {
    $group: {
      _id: { month: { $month: "$date" }, year: { $year: "$date" } },
      revenue: { $sum: { $multiply: ["$quantity", "$price"] } },
    },
  },
  { $sort: { "_id.year": 1, "_id.month": 1 } },
]);

console.log(results);
```

👉 Output:

```json
[
  { "_id": { "month": 8, "year": 2025 }, "revenue": 5000 },
  { "_id": { "month": 9, "year": 2025 }, "revenue": 3000 }
]
```

---

### 3. Orders by Status

```js
const results = await Order.aggregate([
  {
    $group: {
      _id: "$status",
      count: { $sum: 1 },
    },
  },
]);

console.log(results);
```

👉 Output:

```json
[
  { "_id": "pending", "count": 2 },
  { "_id": "shipped", "count": 5 },
  { "_id": "delivered", "count": 10 }
]
```

---

### 4. Join with Customers (Using `$lookup`)

Imagine another model:

```js
const customerSchema = new mongoose.Schema({
  name: String,
  city: String,
});
```

Now aggregate:

```js
const results = await Order.aggregate([
  {
    $lookup: {
      from: "customers", // collection name in DB
      localField: "customerName",
      foreignField: "name",
      as: "customerInfo",
    },
  },
  { $unwind: "$customerInfo" },
  {
    $project: {
      product: 1,
      quantity: 1,
      totalPrice: { $multiply: ["$quantity", "$price"] },
      customerCity: "$customerInfo.city",
    },
  },
]);

console.log(results);
```

---

### 5. Top 3 Customers by Spending

```js
const results = await Order.aggregate([
  {
    $group: {
      _id: "$customerName",
      totalSpent: { $sum: { $multiply: ["$quantity", "$price"] } },
    },
  },
  { $sort: { totalSpent: -1 } },
  { $limit: 3 },
]);

console.log(results);
```

👉 Output:

```json
[
  { "_id": "Ramesh", "totalSpent": 6000 },
  { "_id": "Suresh", "totalSpent": 4500 },
  { "_id": "Mahesh", "totalSpent": 2000 }
]
```

---

## 🏆 Real-World Use Cases

- E-commerce sales dashboards
- Social media “Top 10 users by followers”
- Blog stats “Posts per category”
- Analytics “Daily active users by region”

---

👉 Ramesh, do you want me to **bundle these into exercises (with TODOs + solutions)** like we did for population, so you can practice each stage step-by-step? That way you’ll learn `$match → $group → $lookup → $unwind → $project` progressively.
