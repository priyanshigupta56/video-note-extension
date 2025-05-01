const express = require('express');
const router = express.Router();
const Note = require('../models/noteModel'); // Import the Note model

// === Create a new note ===
router.post('/create', async (req, res) => {
  try {
    const { noteId, userId, videoTitle, category, startTime, endTime } = req.body;

    // Create a new note
    const newNote = new Note({
      noteId,
      userId,
      videoTitle,
      category,
      startTime,
      endTime,
    });

    await newNote.save();
    res.status(201).json({ message: 'Note created successfully', note: newNote });
  } catch (error) {
    res.status(500).json({ message: 'Error creating note', error: error.message });
  }
});

// === Get all notes ===
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notes', error: error.message });
  }
});

// === Get a specific note by ID ===
router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findOne({ noteId: req.params.id });
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching note', error: error.message });
  }
});

// === Update a note ===
router.put('/update/:id', async (req, res) => {
  try {
    const updatedNote = await Note.findOneAndUpdate(
      { noteId: req.params.id },
      req.body,
      { new: true } // Return the updated document
    );

    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({ message: 'Note updated successfully', note: updatedNote });
  } catch (error) {
    res.status(500).json({ message: 'Error updating note', error: error.message });
  }
});

// === Delete a note ===
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedNote = await Note.findOneAndDelete({ noteId: req.params.id });

    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({ message: 'Note deleted successfully', note: deletedNote });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting note', error: error.message });
  }
});

module.exports = router;