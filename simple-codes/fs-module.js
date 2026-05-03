// //Callbacks
// const fs = require("fs");

// fs.readFile('file.txt', 'utf8', function(err, data) {
//     if (err) {
//         console.error(err.message);
//         return;
//     }
//     console.log("File content: ", data)
// })

// fs.writeFile('bigfile.txt', 'This is my first filling system', function(err) {
//     if(err) throw err 
//     console.log('Data added, file saved!');
// })

// // Promises:
// const fs1 = require('fs').promises

// fs1.readFile('file.txt', 'utf8')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.error('Error: ', err.message);
//     })

// fs.readFile('input.txt', 'utf8')
//     .then(data => fs.writeFile('output.txt', data))
//     .then(() => console.log("Done!"))
//     .catch(err => console.error(err.message))

//Async/await

const fs2 = require('fs').promises

// Reading a file
async function readMyFile() {
  try {
    const data = await fs2.readFile('bigfile.txt', 'utf8')
    console.log(data)
  } catch (err) {
    console.error('Error:', err.message)
  }
}
readMyFile()

async function processFiles() {
  try {
    const data    = await fs2.readFile('bigfile.txt', 'utf8')
    const upper   = data.toUpperCase()
    await fs2.writeFile('output.txt', upper)
    console.log('Done! Wrote', upper.length, 'characters')
  } catch (err) {
    console.error('Something failed:', err.message)
  }
}

processFiles()