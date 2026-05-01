//This is synchronous code. It runs in order, and each line waits for the previous one to finish before it runs.
const fs = module.require('fs');

// This STOPS everything until the file is fully read
const data = fs.readFileSync('bigfile.txt', 'utf8');
console.log(data);
console.log('This runs AFTER file is done');


//This is called a callback function, and it's a common pattern in Node.js
// This registers a callback and moves on IMMEDIATELY
fs.readFile('bigfile.txt', 'utf8', function(err, data) {
    // This runs later, when the file is ready
    if (err) throw err;
    console.log(data);
});

console.log('This runs FIRST, before file is even done!');

//Modern async await syntax
async function readFileAsync() {
    try {
        const data = await fs.promises.readFile('bigfile.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readFileAsync();
console.log('This runs immediately, before async function finishes!');