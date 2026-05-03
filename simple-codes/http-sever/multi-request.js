// const http = require('http')
import http from 'http';

const server = http.createServer(function(req, res) {

    //Route: Home Page
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>Home Page</h1><a href="/about">Go to About</a>')
    }
    // Route: About page
    else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>About Page</h1><a href="/">Go Home</a>')
    }

    // Route: JSON data
    else if (req.url === '/api/user' && req.method === 'GET') {
        const user = { name: 'Ali', age: 22, city: 'Karachi' }
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(user))
    }

    // 404 — nothing matched
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('<h1>404 — Page not found</h1>')
    }
})
server.listen (3000,
    () => console.log('Server at http://localhost:3000')
)