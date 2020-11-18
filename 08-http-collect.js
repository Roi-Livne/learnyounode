const http = require('http');
const url = process.argv[2];
const bl = require('bl');

http.get(url, (res) => {
    res.on('error', err => console.log(err));
    res.pipe(bl((err, data) => {
        if (err) console.log(err);
        else {
            const dataStr = data.toString();
            console.log(dataStr.length);
            console.log(dataStr);
        }
    }))
})