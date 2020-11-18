const fs = require('fs');
let path = process.argv[2];
fs.readFile(path, 'utf8', (err, data) => {
    if (err) console.log(err);
    else return console.log(data.split('\n').length - 1);
})