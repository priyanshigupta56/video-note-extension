const mongoose = require('mongoose');

// Define the schema for a note
const noteSchema = new mongoose.Schema({
  noteId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
  },
  videoTitle: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Important', 'Doubt', 'Rewatch', 'Other'], // Optional: predefined categories
    required: true,
  },
  startTime: {
    type: String, // Use String to store time in "HH:MM:SS" format
    required: true,
  },
  endTime: {
    type: String, // Use String to store time in "HH:MM:SS" format
    required: true,
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create the model
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;