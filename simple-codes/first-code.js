import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'file.txt');

const data = fs.readFileSync(filePath, 'utf-8');
console.log(data);
console.log('File read successfully');

fs.readFile(filePath, 'utf-8', (err, asyncData) => {
  if (err) {
    console.error('Read failed:', err);
    return;
  }
  console.log(asyncData);
  console.log('File read asynchronously successfully');
});

console.log('This runs first!');
