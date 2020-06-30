// Require the mongose library
const mongoose = require('mongoose');

// Define the note's database schema
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  },
  {
    // Assigns createdAt and updatedAt fields with a Date type
    timestamps: true
  }
);

// Define the 'Book' model with the schema
const Book = mongoose.model('Book', bookSchema);
// Export the module
module.exports = Book;
