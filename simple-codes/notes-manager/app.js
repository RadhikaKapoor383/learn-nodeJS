const { getNotes, addNote, deleteNote } = require('./notesManager')

async function run() {
  // Add some notes
  const n1 = await addNote('Day 1', 'Learned about Node architecture')
  const n2 = await addNote('Day 2', 'Modules and require/exports')
  const n3 = await addNote('Day 3', 'File system with fs module')

  // Read them back
  const all = await getNotes()
  console.log('All notes:')
  all.forEach(n => console.log(`  [${n.id}] ${n.title}: ${n.content}`))

  // Delete one
  await deleteNote(n2.id)
  console.log('\nAfter deleting note 2:')
  const remaining = await getNotes()
  remaining.forEach(n => console.log(`  [${n.id}] ${n.title}`))
}

run()