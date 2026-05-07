const fs = require('fs');

const dir = process.argv[2];
const ext = "." + process.argv[3];
fs.readdir(dir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  files.forEach(file => {
    if (file.endsWith(`${ext}`)) {
      console.log(file);
    }
  });
});
console.log(ext);