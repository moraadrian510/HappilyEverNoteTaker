
const path = require('path');
const router = require('express').Router();



//Get Route for notes.HTML page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

<<<<<<< HEAD
// Get Route for homepage
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

=======
>>>>>>> beb703d81ceeee5dcd8436655979c35ab637324c


module.exports = router;