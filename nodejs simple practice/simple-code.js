const express = require('express');
const person = require('./index.js');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json(person);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});