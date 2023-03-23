require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Have to use body-parser to be able to read the body of the request
app.use(bodyParser.json());

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
