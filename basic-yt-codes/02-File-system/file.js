const fs = require('fs');

// Create a new file and write data to it
// fs.writeFileSync('./text.txt', 'Heyy World!');

// fs.writeFile('./text.txt', 'Heyy World! from async', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('Async File created successfully!');  
//     }
// });
// console.log('File created successfully!');


// read file from contact.txt

// fs.readFile('./contacts.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data);
//     }
// });


// const resultFromReadSync = fs.readFileSync('./contacts.txt', 'utf-8');
// console.log(resultFromReadSync);
// console.log('File read successfully from Sync!');

fs.appendFile('./contacts.txt', '\nNeha kapoor +922200000', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Data appended successfully!');
    }
});
fs.appendFileSync('./text.txt', '\nThis is a new line added to the file using appendFileSync method.');
console.log('Data appended successfully using appendFileSync method!');

fs.copyFileSync('./contacts.txt', './contacts_copy.txt');
fs.unlinkSync('./contacts_copy.txt');
console.log(fs.statSync("./text.txt").atime);