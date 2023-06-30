// app.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const bookingRoutes = require('./routes/bookingRoutes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use the booking routes
app.use('/', bookingRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

