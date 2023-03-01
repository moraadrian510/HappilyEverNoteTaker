
const router = require('express').Router();
const path = require('path');
const store = require('../db/store');


// Get Route for homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

//Get Route for notes.HTML page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

// GET "/api/notes" responds with all notes from the database
router.get('/api/notes', (req, res) => {
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
});

module.exports = router;
