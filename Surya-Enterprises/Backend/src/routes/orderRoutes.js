const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// POST create new order
router.post('/', orderController.createOrder);

// GET all orders
router.get('/', orderController.getAllOrders);

// GET single order by ID
router.get('/:id', orderController.getOrderById);

// GET orders by user ID
router.get('/user/:userId', orderController.getOrdersByUserId);

module.exports = router;
