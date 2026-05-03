const path = require('path')

// path.join — safely joins segments
path.join('public', 'images', 'photo.jpg')
// → 'public/images/photo.jpg' on Mac/Linux
// → 'public\images\photo.jpg' on Windows (handled automatically)

// __dirname — the folder this current file lives in
// This is how you build absolute paths that always work
const filePath = path.join(__dirname, 'data', 'users.json')
// → '/home/ali/my-project/data/users.json'  (always correct, wherever you run it)

// path.basename — get just the filename
console.log(path.basename('/home/ali/notes.txt'));       // → 'notes.txt'

// path.extname — get the file extension
console.log(path.extname('photo.jpg'));                 // → '.jpg'

// path.dirname — get the folder containing a file
console.log(path.dirname('/home/ali/project/app.js'));  // → '/home/ali/project'