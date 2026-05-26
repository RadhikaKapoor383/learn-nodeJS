const express = require('express')
const fs = require('fs').promises
const path = require('path')

const app = express()
const PORT = 3000
const filePath = path.join(__dirname, 'data.txt')
const addLogPath = path.join(__dirname, 'add-log.txt')
const updateLogPath = path.join(__dirname, 'update-log.txt')

function getLogLine(action, content) {
    return `${new Date().toLocaleString()} | ${action} | ${content.length} characters\n`
}

async function addLog(action, content) {
    const logPath = action === 'ADD' ? addLogPath : updateLogPath
    await fs.appendFile(logPath, getLogLine(action, content))
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(function(req, res, next) {
    res.set('Cache-Control', 'no-store')
    next()
})
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
        await addLog('UPDATE', content)
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
        await addLog('ADD', content)
        res.json({ message: 'Content appended successfully' })
    } catch (err) {
        res.status(500).json({ message: 'Error appending file' })
    }
})

// ADD log request
app.get('/logs/add', async function(req, res) {
    try {
        const data = await fs.readFile(addLogPath, 'utf8')
        res.json({ message: 'Add log read successfully', data })
    } catch (err) {
        if (err.code === 'ENOENT') {
            res.json({ message: 'No add log yet', data: '' })
            return
        }

        res.status(500).json({ message: 'Error reading add log' })
    }
})

// UPDATE log request
app.get('/logs/update', async function(req, res) {
    try {
        const data = await fs.readFile(updateLogPath, 'utf8')
        res.json({ message: 'Update log read successfully', data })
    } catch (err) {
        if (err.code === 'ENOENT') {
            res.json({ message: 'No update log yet', data: '' })
            return
        }

        res.status(500).json({ message: 'Error reading update log' })
    }
})

// DELETE request
app.delete('/delete', async function(req, res) {
    try {
        const content = req.body?.content || ''

        if (!content) {
            res.status(400).json({ message: 'Please enter text to delete' })
            return
        }

        const data = await fs.readFile(filePath, 'utf8')
        const updatedData = data.split(content).join('')

        if (data === updatedData) {
            res.status(404).json({ message: 'Text not found in file' })
            return
        }

        await fs.writeFile(filePath, updatedData)
        res.json({ message: 'Selected text deleted successfully', data: updatedData })
    } catch (err) {
        if (err.code === 'ENOENT') {
            res.status(404).json({ message: 'File does not exist yet' })
            return
        }

        res.status(500).json({ message: 'Error deleting selected text' })
    }
})

app.listen(PORT, function() {
    console.log(`Express server running at http://localhost:${PORT}`)
})
