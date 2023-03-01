
const router = require('express').Router();
const path = require('path');
const store = require('../db/store');




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
