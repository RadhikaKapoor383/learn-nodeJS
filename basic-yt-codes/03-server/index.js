const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.appendFile('server.log', `${new Date().toISOString()}: ${req.url} New request received - ${req.method} ${req.url}\n`, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }

    });
    switch (req.url) {
        case '/':
            res.end('Welcome to the Home Page!\n');
            break;
        case '/about':
            res.end('Welcome to the About Page!\n');
            break;
        case '/contact':
            res.end('Welcome to the Contact Page!\n');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found\n');
    }
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
