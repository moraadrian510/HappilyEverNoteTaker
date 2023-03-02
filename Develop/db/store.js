const json = require('./db.json');
const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8');
    }

    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }

    async getNotes() {
        const data = await this.read();
        return JSON.parse(data);
    }

    async addNote(note) {
        const notes = await this.getNotes();
        notes.push(note);
        await this.write(notes);
    }

    async removeNote(id) {
        const notes = await this.getNotes();
        const filteredNotes = notes.filter(note => note.id !== id);
        await this.write(filteredNotes);
    }
}

module.exports = new Store();