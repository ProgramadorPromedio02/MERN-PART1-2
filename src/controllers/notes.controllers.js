const notesCtrl = {};

const Note = require('../models/Note.js');

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title,
    content,
    date,
    author,
  });
  await newNote.save();
  res.json({ message: 'Notes Saved' });
};

notesCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};

notesCtrl.updateNote = async (req, res) => {
  const { title, content, author, date } = req.body;
  await Note.findOneAndUpdate(
    { _id: req.params.id },
    {
      title,
      content,
      author,
      date,
    }
  );
  res.json({ message: 'Note Updated' });
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'Note Deleted' });
};

module.exports = notesCtrl;
