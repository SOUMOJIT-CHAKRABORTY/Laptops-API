const express = require("express");
const router = express.Router();
const Laptop = require("../Models/laptop");

// Getting All
router.get("/", async (req, res) => {
  try {
    const laptops = await Laptop.find();
    res.send(laptops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Getting One
router.get("/:id", (req, res) => {});

// Creating One
router.post("/", async (req, res) => {
  const laptop = new Laptop({
    modelName: req.body.modelName,
    brandName: req.body.brandName,
    price: req.body.price,
  });

  try {
    const newLaptop = await laptop.save();
    res.status(201).json(newLaptop);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating One
router.patch("/:id", (req, res) => {});

// Deleting One
router.delete("/:id", (req, res) => {
  // How to delete a laptop from the database
});

module.exports = router;
