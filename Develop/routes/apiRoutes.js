
const router = require('express').Router();
const store = require('../db/store');
const {v4: uuidv4} = require('uuid')
// const fs = require('fs');


// GET "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
    console.log('route hit')
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));

});

router.post('/notes', (req, res) => {
    console.info(`${req.method} request recived`)


    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4()
        }
        store
            .addNote(newNote)
            .then(() => {
                const response = {
                    status: 'success',
                    body: newNote,
                }
                console.log(response);
                res.status(201).json(response);
            })
   
    } else {
        res.status(500).json('Error creating post request')
    }
});

router.delete('/notes/:id', (req, res) => {

    const { id } = req.params
    store.removeNote(id).then(() => {
        res.status(200).end();
    });
});


module.exports = router;
//fs write file 