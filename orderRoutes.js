const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Place an Order
router.post('/', orderController.placeOrder);

// Get Order by ID
router.get('/:id', orderController.getOrder);

module.exports = router;
