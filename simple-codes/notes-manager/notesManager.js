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

async function addNote(title, content) {
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
async function updateNote(id, newContent) {
    const notes = await getNotes()
    const updated = notes.map(n => n.id === id ? {...n, content: newContent} : n)
    await fs.writeFile(FILE, JSON.stringify(updated, null, 2))
    return updated.find(n => n.id === id)
}
async function searchNotes(keyword) {
    const notes = await getNotes()
    const search = notes.filter(n =>
    n.title.toLowerCase().includes(keyword.toLowerCase()) ||
    n.content.toLowerCase().includes(keyword.toLowerCase())
    )
    if (search.length > 0) {
        console.log(`Found ${search.length} note(s) matching "${keyword}":`)
        search.forEach(n => console.log(`  [${n.id}] ${n.title}: ${n.content}`))
    } else {
        console.log(`No notes found matching "${keyword}"`)
    }

    return search
}

module.exports = { getNotes, addNote, deleteNote, updateNote, searchNotes }