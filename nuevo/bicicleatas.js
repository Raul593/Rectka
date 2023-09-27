const fs = require('fs');

let datos = fs.readFileSync('./json.json', {encoding: 'utf-8'});
module.exports = datos;