const http = require('http');
const port = process.argv[2];
const endpointTimeParse = '/api/parsetime';
const endpointTimeUnix = '/api/unixtime';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const url = req.url;
    const query = req.url.split("iso=")[1];
    const date = new Date(query);

    if (url.includes(endpointTimeParse)) {
        const time = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
        res.write(JSON.stringify(time));
        res.end();
    }
    if (url.includes(endpointTimeUnix)) {
        const time = { unixtime: date.getTime() };
        res.write(JSON.stringify(time));
        res.end();
    }
})
server.listen(port);