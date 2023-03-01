const express = require('express');
// const path = require('path');
const api = require('./routes/apiRoutes.js');
const notes = require('./routes/htmlRoutes.js');




//setting up server
const PORT = process.env.PORT || 3001;
const app = express();

//static middleware
app.use(express.static('public'));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use('/notes', notes);

app.listen(PORT, () =>
    console.log(`App Listening at http://localhost:${PORT}`));