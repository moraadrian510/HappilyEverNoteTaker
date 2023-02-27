const express = require('express');
const path = require('path');
const utils = require('../utils');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Get Route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

//Get Route for notes.HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

app.listen(PORT, () => console.log(`App Listening on ${PORT}`));