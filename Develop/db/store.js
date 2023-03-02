const json = require('./db.json');
const fs = require('fs');

function getNotes(){
    return json;

} 

module.exports = getNotes;