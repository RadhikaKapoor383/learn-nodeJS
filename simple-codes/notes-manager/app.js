const { getNotes, addNote, deleteNote, updateNote, searchNotes } = require('./notesManager')

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

  // ── 3. UPDATE A NOTE ──────────────────────────
    console.log('--- Updating note 2 ---')
    await updateNote(n2.id, 'Updated: CommonJS vs ES Modules')
    const afterUpdate = await getNotes()
    afterUpdate.forEach(n => console.log(`  [${n.id}] ${n.title}: ${n.content}`))
    console.log()

    // ── 4. SEARCH NOTES ───────────────────────────
    console.log('--- Searching for "Node" ---')
    await searchNotes('Node')
    console.log()

    console.log('--- Searching for "xyz" (no match) ---')
    await searchNotes('xyz')
    console.log()

    // ── 5. DELETE A NOTE ──────────────────────────
    console.log('--- Deleting note 2 ---')
    await deleteNote(n2.id)
    const afterDelete = await getNotes()
    afterDelete.forEach(n => console.log(`  [${n.id}] ${n.title}: ${n.content}`))
}

run()