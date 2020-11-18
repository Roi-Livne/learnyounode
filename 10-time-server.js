const net = require('net');
const server = net.createServer((socket) => {
    const currDate = timeNow();
    socket.end(currDate);
})
server.listen(process.argv[2]);

function timeNow() {
    let date = new Date();
    let year = date.getFullYear();
    let month = addZero(date.getMonth() + 1);
    let day = addZero(date.getDate());
    let hours = addZero(date.getHours());
    let minutes = addZero(date.getMinutes());
    return `${year}-${month}-${day} ${hours}:${minutes}\n`
}
function addZero(date) {
    if (date < 10) return '0' + date;
    else return date;
}