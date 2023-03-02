
const router = require('express').Router();
const store = require('../db/store');
const json = require('../db/db.json');
const fs = require('fs');


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

router.post('/api/notes', (req, res) => {
    console.info(`${req.method} request recived`)


    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
        }

        // GET "/api/notes" responds with all notes from the database
        router.get('/notes', (req, res) => {
            console.log('route hit')
            store
                .getNotes()
                .then((notes) => {
                    return res.json(notes);
                })
                .catch((err) => res.status(500).json(err));
            res.json(json)
        });

        router.post('/api/notes', (req, res) => {
            console.info(`${req.method} request recived`)


            const { title, text } = req.body;

            if (title && text) {
                const newNote = {
                    title,
                    text,
                }

                store
                    .saveNote(newNote)
                    .then(() => {
                        const response = {
                            status: 'success',
                            body: newNote,
                        }
                    })

                console.log(response);
                res.status(201).json(response);
            } else {
                res.status(500).json('Error creating post request')
            }
        });

        const response = {
            status: 'success',
            body: newNote,
        };

        console.log(response);
        res.status(201).json(response);
    } else {
        res.status(500).json('Error creating post request')
    }
});


module.exports = router;
//fs write file 