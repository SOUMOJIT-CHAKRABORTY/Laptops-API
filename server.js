require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => console.log("Connected to Database"));

const laptopRouter = require("./Routers/laptops");
// We have to now use the laptopRouter for any link after /laptops
app.use("/laptoplist", laptopRouter);

app.listen(3000, () => console.log("server started"));
