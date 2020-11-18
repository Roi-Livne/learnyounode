const http = require('http');
const bl = require('bl');
const arr = new Array(3);
let count = 3;

for (let i = 2; i < process.argv.length; i++) {
    http.get(process.argv[i], (res) => {
        res.pipe(bl((err, data) => {
            if (err) console.log(err);
            else {
                data = data.toString();
                arr[i - 2] = data;
                count--;
                if (!count) logResults();
            }
        }))
    })
}
function logResults() {
    for (let str of arr) console.log(str);
}

