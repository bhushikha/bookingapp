// // Example controller functions
// function getAllBookings(req, res) {
//     // Fetch all bookings from the database
//     const bookings = []; // Placeholder code
  
//     res.render('bookings/index', { bookings });
// }
  
// function createBooking(req, res) {
//     const { name, date, time } = req.body;
  
    
//     const newBooking = { id: 1, name, date, time }; 
  
//     res.redirect('/api/bookings');
// }
  
// function getBookingById(req, res) {
//     // Extract the booking ID from the request parameters
//     const bookingId = req.params.id;
  
//     // Fetch the booking with the specified ID from the database
//     const booking = {}; // Placeholder code
  
//     res.render('bookings/show', { booking });
// }
  
// function updateBooking(req, res) {
//     // Extract the booking ID from the request parameters
//     const bookingId = req.params.id;
  
//     // Extract updated booking data from the request body
//     const { name, date, time } = req.body;
  
//     // Update the booking with the specified ID in the database
//     const updatedBooking = { id: bookingId, name, date, time }; // Placeholder code
  
//     res.redirect(`/api/bookings/${bookingId}`);
// }
  
// function deleteBooking(req, res) {
//     // Extract the booking ID from the request parameters
//     const bookingId = req.params.id;
  
//     // Delete the booking with the specified ID from the database
//     // Placeholder code
  
//     res.redirect('/api/bookings');
// }
  
// module.exports = {
//     getAllBookings,
//     createBooking,
//     getBookingById,
//     updateBooking,
//     deleteBooking,
//   };

// Placeholder array to store bookings
let bookings = [];

// Generate a unique ID for a new booking
function generateId() {
  return bookings.length > 0 ? bookings[bookings.length - 1].id + 1 : 1;
}

// Controller functions
function getAllBookings(req, res) {
  res.render('bookings/index', { bookings });
}

function createBooking(req, res) {
  const { name, date, time } = req.body;
  const newBooking = { id: generateId(), name, date, time };
  bookings.push(newBooking);
  res.redirect('/api/bookings');
}

function getBookingById(req, res) {
  const bookingId = parseInt(req.params.id);
  const booking = bookings.find((booking) => booking.id === bookingId);
  res.render('bookings/show', { booking });
}

function updateBooking(req, res) {
  const bookingId = parseInt(req.params.id);
  const { name, date, time } = req.body;
  const booking = bookings.find((booking) => booking.id === bookingId);
  booking.name = name;
  booking.date = date;
  booking.time = time;
  res.redirect(`/api/bookings/${bookingId}`);
}

function deleteBooking(req, res) {
  const bookingId = parseInt(req.params.id);
  bookings = bookings.filter((booking) => booking.id !== bookingId);
  res.redirect('/api/bookings');
}

module.exports = {
  getAllBookings,
  createBooking,
  getBookingById,
  updateBooking,
  deleteBooking,
};


  