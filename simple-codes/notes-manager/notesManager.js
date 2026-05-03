const fs = require('fs').promises
const path = require('path')

const FILE = path.join(__dirname, 'notes.json');

async function getNotes() {
    try {
        const data = await fs.readFile(FILE, 'utf8')
        return JSON.parse(data)
    } catch {
        return []
    }
}

async function addNotes(title, content) {
    const notes = await getNotes()
    const note = {
        id: Date.now(),
        title, 
        content,
        created: new Date().toISOString()
    }
    notes.push(note)
    await fs.writeFile(FILE, JSON.stringify(notes, null, 2))
    return note
}
async function deleteNote(id) {
    const notes   = await getNotes()
    const updated = notes.filter(n => n.id !== id)
    await fs.writeFile(FILE, JSON.stringify(updated, null, 2))
}

module.exports = { getNotes, addNote, deleteNote }