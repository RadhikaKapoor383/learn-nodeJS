import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (_req, res) => {
  res.type('text').send('Node + Express is working');
});

app.get('/api/person', (_req, res) => {
  // small example of Node core (fs) used from inside a route
  const filePath = path.join(__dirname, 'file.txt');
  const text = fs.readFileSync(filePath, 'utf-8');

  res.json({
    message: 'Read file using fs inside Express route',
    fileText: text
  });
});

app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);
});
