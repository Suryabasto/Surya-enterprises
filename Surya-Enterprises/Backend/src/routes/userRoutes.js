const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST create new user
router.post('/', userController.createUser);

// GET all users
router.get('/', userController.getAllUsers);

// GET single user by ID
router.get('/:id', userController.getUserById);

module.exports = router;
