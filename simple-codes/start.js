import fs from 'fs';

// This registers a callback and moves on IMMEDIATELY
fs.readFile('bigfile.txt', 'utf8', function(err, data) {
    // This runs later, when the file is ready
    if (err) throw err;
    console.log(data);
});

console.log('This runs FIRST, before file is even done!');