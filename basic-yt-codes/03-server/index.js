const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, from Server!\n');
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
