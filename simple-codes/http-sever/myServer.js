const http = require("http");
const fs = require("fs");
const path = require("path");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}  New Req received.\n`;
    const logPath = path.join(__dirname, "log.txt");

    fs.appendFile(logPath, log, (err) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Server error.");
            return;
        }

        res.end("Hello from server.");
    })
});
myServer.listen(3004, () => console.log('Server at http://localhost:3004'))