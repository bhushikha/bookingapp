const db = require('../db');

// Insert a new user
function createUser(req, res) {
  const { name, email, password } = req.body;

  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  const values = [name, email, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).json({ message: 'Failed to insert user' });
    } else {
      res.status(201).json({ message: 'User created successfully' });
    }
  });
}

// Get all users
function getAllUsers(req, res) {
  const sql = 'SELECT * FROM users';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error getting users:', err);
      res.status(500).json({ message: 'Failed to fetch users' });
    } else {
      res.status(200).json(results);
    }
  });
}

// Delete a user
function deleteUser(req, res) {
  const userId = req.params.id;

  const sql = 'DELETE FROM users WHERE id = ?';
  const values = [userId];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      res.status(500).json({ message: 'Failed to delete user' });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  });
}

module.exports = {
  createUser,
  getAllUsers,
  deleteUser,
};
