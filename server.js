const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config.js');
const menuRoutes = require('./menuRoutes.js');
const orderRoutes = require('./orderRoutes.js');

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Body Parser

// API Routes Links
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('Chai Pila Cafe API is running successfully...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in production on port ${PORT}`);
});