const express = require('express')
const fs = require('fs').promises
const path = require('path')

const app = express()
const PORT = 3000
const filePath = path.join(__dirname, 'data.txt')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// Home route: runs public/index.html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// READ request
app.get('/read', async function(req, res) {
    try {
        const data = await fs.readFile(filePath, 'utf8')
        res.json({ message: 'File read successfully', data })
    } catch (err) {
        if (err.code === 'ENOENT') {
            res.status(404).json({ message: 'File does not exist yet' })
            return
        }

        res.status(500).json({ message: 'Error reading file' })
    }
})

// WRITE request: creates/replaces file content
app.post('/write', async function(req, res) {
    try {
        const content = req.body.content || ''
        await fs.writeFile(filePath, content)
        res.json({ message: 'File written successfully' })
    } catch (err) {
        res.status(500).json({ message: 'Error writing file' })
    }
})

// APPEND request: adds content at the end of file
app.post('/append', async function(req, res) {
    try {
        const content = req.body.content || ''
        await fs.appendFile(filePath, content)
        res.json({ message: 'Content appended successfully' })
    } catch (err) {
        res.status(500).json({ message: 'Error appending file' })
    }
})

// DELETE request
app.delete('/delete', async function(req, res) {
    try {
        await fs.unlink(filePath)
        res.json({ message: 'File deleted successfully' })
    } catch (err) {
        if (err.code === 'ENOENT') {
            res.status(404).json({ message: 'File does not exist' })
            return
        }

        res.status(500).json({ message: 'Error deleting file' })
    }
})

app.listen(PORT, function() {
    console.log(`Express server running at http://localhost:${PORT}`)
})
// Server at http://localhost:3000'))Server at http://localhost:3000'))