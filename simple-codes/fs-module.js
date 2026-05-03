const fs = require("fs");

fs.readFile('file.txt', 'utf8', function(err, data) {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("File content: ", data)
})

fs.writeFile('bigfile.txt', 'This is my first filling system', function(err) {
    if(err) throw err 
    console.log('Data added, file saved!');
})