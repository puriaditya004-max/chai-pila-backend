const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // e.g., 'combos', 'pizza', 'chinese'
  price: { type: Number, required: true },
  emoji: { type: String, default: '🍽️' },
  isBestseller: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Menu', menuSchema);