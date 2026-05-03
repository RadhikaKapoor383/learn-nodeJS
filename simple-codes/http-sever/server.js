const http = require('http')

const server = http.createServer(function(req, res) {
    console.log('Request received:', req.method, req.url)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<div><h1>Hello Peeps!</h2><h3>How are you??</h3></div>')
})

server.listen(3003, function() {
    console.log('Server running at http://localhost:3003')
})