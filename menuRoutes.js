const express = require('express');
const router = express.Router();
const Menu = require('./Menu');

// 1. Get all menu items (Frontend par dikhane ke liye)
router.get('/', async (req, res) => {
  try {
    const menuItems = await Menu.find({});
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// 2. Add a new menu item (Client/Admin ke use ke liye)
router.post('/', async (req, res) => {
  const { name, category, price, emoji, isBestseller } = req.body;
  try {
    const newItem = new Menu({ name, category, price, emoji, isBestseller });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: 'Invalid Data' });
  }
});

module.exports = router;
