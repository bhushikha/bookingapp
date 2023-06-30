const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// Create a new user
router.post('/api/users', userController.createUser);

// Get all users
router.get('/api/users', userController.getAllUsers);

// Delete a user
router.delete('/api/users/:id', userController.deleteUser);

// Root URL route
router.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Booking App</h1>
    <form method="POST" action="/api/users">
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" required>
      <br>
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" required>
      <br>
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" required>
      <br>
      <button type="submit">Submit</button>
    </form>
  `);
});

module.exports = router;
