// const http = require('http')
import http from 'http';

const server = http.createServer(function(req, res) {

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>Home Page</h1><a href="/about">Go to About</a>')
    }
})