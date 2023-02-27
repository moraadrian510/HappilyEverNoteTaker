const express = require('express');
const path = require('path');
const api = rquire('.routes/index.js');



//setting up server
const PORT = process.env.PORT || 3001;
const app = express();

//static middleware
app.use(express.static('public'));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Get Route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

//Get Route for notes.HTML page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

app.listen(PORT, () =>
    console.log(`App Listening at http://localhost:${PORT}`));