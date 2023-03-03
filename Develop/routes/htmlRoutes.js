
const path = require('path');
const router = require('express').Router();



//Get Route for notes.HTML page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

// Get Route for homepage
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})



module.exports = router;