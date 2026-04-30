import fs from 'fs';
// const human = module.require('./index');
// console.log("Hello ", human);
// console.log(human.name);
// console.log(human.age);
// console.log(human.city);
// console.log(human.hobbies[2]);
// console.log(human.developer);
// const fs = module.require('fs');
// const data = fs.readFileSync('./file.txt', 'utf-8');
// console.log(data);
// console.log("File read successfully");

fs.readFile('file.txt', (err, data) => {
  console.log(data);  // runs when ready
});
console.log("This runs first!");
