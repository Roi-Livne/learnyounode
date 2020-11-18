const http = require('http');
const bl = require('bl');

const server = http.createServer((req, res) => {
    let streamObj = "";
    req.on('data', (data) => {
        streamObj += data.toString().toUpperCase();
    })
    req.on('end', () => {
        res.write(streamObj);
        res.end();
    })
})
server.listen(process.argv[2]);