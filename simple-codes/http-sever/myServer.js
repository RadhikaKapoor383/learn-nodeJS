const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}  New Req recevied.\n`;
    fs.appendFile('log.txt', log, (err, data) => {
        res.end("Hello from server.");
    })
})
myServer.listen(3000, () => console.log('Server at http://localhost:3000'))