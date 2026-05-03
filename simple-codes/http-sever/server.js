// const http = require('http')

// const server = http.createServer(function(req, res) {
//     console.log('Request received:', req.method, req.url)
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.end('<div><h1>Hello Peeps!</h2><h3>How are you??</h3></div>')
// })

// server.listen(3003, function() {
//     console.log('Server running at http://localhost:3003')
// })

const http = require('http')
const fs   = require('fs').promises
const path = require('path')

const server = http.createServer(async function(req, res) {

    if (req.url === '/' && req.method === 'GET') {
        try {
            const filePath = path.join(__dirname, 'public', 'index.html')
            const html     = await fs.readFile(filePath, 'utf8')
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(html)
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end('Server error: could not read file')
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('Not found')
    }
})

server.listen(3000, () => console.log('Server at http://localhost:3000'))