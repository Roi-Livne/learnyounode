const fs = require('fs');
let path = process.argv[2];
let numOfLines = fs.readFileSync(path).toString().split('\n').length - 1;
console.log(numOfLines);