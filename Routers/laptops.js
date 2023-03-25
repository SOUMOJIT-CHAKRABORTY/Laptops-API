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
router.get("/:id", async (req, res) => {
  // How to get a single laptop from the database
  try {
    const laptop = await Laptop.findById(req.params.id);
    res.send(laptop);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

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
router.patch("/:id", async (req, res) => {
  try {
    const updatedLaptop = await Laptop.updateOne(
      { _id: req.params.id },
      {
        $set: {
          modelName: req.body.modelName,
          brandName: req.body.brandName,
          price: req.body.price,
        },
      }
    );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting One
router.delete("/:id", async (req, res) => {
  // How to delete a laptop from the database
  try {
    const removedLaptop = await Laptop.remove({ _id: req.params.id });
    res.json(removedLaptop);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
