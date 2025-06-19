const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// All routes require authentication:
router.use(protect);

// Any authenticated user can view users
router.get('/', userController.getUsers);

// Only admin users can create, update, or delete users
router.post('/', adminOnly, authController.register);  // Use register() to hash password
router.put('/:id', adminOnly, userController.updateUser);
router.delete('/:id', adminOnly, userController.deleteUser);

module.exports = router;
