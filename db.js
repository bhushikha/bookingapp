const mysql = require('mysql');
const config = require('./config');

// Create the database connection pool
const pool = mysql.createPool(config);

module.exports = pool;
