const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const streamObj = fs.createReadStream(process.argv[3]);
    streamObj.pipe(res);
})
server.listen(process.argv[2]);