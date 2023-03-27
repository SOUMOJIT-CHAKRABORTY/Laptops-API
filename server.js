const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const Post = require("./models/Post");

const data = JSON.parse(fs.readFileSync("./fakeEntries.json", "utf-8"));

// console.log(data);

const importData = async () => {
  try {
    await Post.create(data);
    console.log("data successfully imported");
    // to exit the process
    process.exit();
  } catch (error) {
    console.log("error", error);
  }
};

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (err) => console.log("Error connecting to MongoDB", err));
db.once("open", () => console.log("Connected to MongoDB"));

const laptopRouter = require("./Routers/routes");
app.use("/laptops", laptopRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
  //   importData();
});

app.listen(4000, () => console.log("Server is running on port 4000"));
