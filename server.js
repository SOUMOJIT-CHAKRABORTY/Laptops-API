const app = require("express")();
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (err) => console.log("Error connecting to MongoDB", err));
db.once("open", () => console.log("Connected to MongoDB"));

const laptopRouter = require("./Routers/routes");
app.use("/laptops", laptopRouter);

app.listen(4000, () => console.log("Server is running on port 4000"));
