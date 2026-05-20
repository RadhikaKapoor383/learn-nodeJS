const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}  ${req.url}  New Req received.\n`;
    const logPath = path.join(__dirname, "log.txt");
    const myUrl = url.parse(req.url, true);
    console.log(myUrl)
    fs.appendFile(logPath, log, (err) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Server error.");
            return;
        }
        switch(myUrl.pathname){
            case "/":
                res.end("Hello from server.");
                break;
            case "/about":
                res.end("Response From Radhika Kapoor");
                break;
            case "/contact-us":
                res.end("Contact Information.");
                break;
            default:
                res.end("404 Not found");
                break;
        }
    })
});
myServer.listen(3004, () => console.log('Server at http://localhost:3004'))