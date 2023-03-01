const express = require('express');
const path = require('path');
const router = express.Router();

// Get Route for homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

//Get Route for notes.HTML page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

router.post

module.exports = router;