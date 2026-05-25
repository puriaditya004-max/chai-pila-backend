const express = require('express');
const router = express.Router();
const Order = require('./Order');

// 1. Place a new order
router.post('/', async (req, res) => {
  const { items, subtotal, deliveryFee, total } = req.body;
  if (!items || items.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
  }
  try {
    const newOrder = new Order({ items, subtotal, deliveryFee, total });
    const createdOrder = await newOrder.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: 'Order Placement Failed' });
  }
});

// 2. Get all orders (Client/Owner dashboard par dekhne ke liye)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
