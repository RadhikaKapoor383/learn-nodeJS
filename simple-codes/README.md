# Learn Node.js (Simple Codes)

This folder contains small Node.js examples. The goal is to learn by doing.

## How to run

From `EAD/learn-nodeJS/simple-codes`:

```bash
npm run hello
npm run show-index
npm run start:express
```

Notes:
- `npm run hello` runs `first-code.js` (reads `file.txt` using both sync and async `fs`).
- `npm run show-index` runs `use-index.js` (imports the ES module from `index.js`).
- `npm run start:express` starts the Express server.

## Express endpoints

After starting the server:
- `GET /` → “Node + Express is working”
- `GET /api/person` → returns JSON with the contents of `file.txt`

Example:
```bash
curl http://localhost:3000/
curl http://localhost:3000/api/person
```

## Beginner roadmap (Beginner → Confident)

### 1) JavaScript basics (must-have)
Learn:
- variables & functions
- arrays & objects
- `let/const`
- Promises (idea)

Practice:
- write small Node scripts that log / transform data.

### 2) Node basics
Learn:
- Node runtime vs browser
- `process`, `console`
- modules: ES Modules (ESM) vs CommonJS

Practice (in this folder):
- `index.js` (ESM export)
- `use-index.js` (import + use)

### 3) File system (`fs`)
Learn:
- sync vs async file operations
- callbacks (then move to Promises later)

Practice:
- `first-code.js`
  - it reads `file.txt` using sync + async methods

### 4) Asynchronous programming
Learn:
- event loop (high level)
- Promises + async/await
- error handling patterns

Practice:
- convert the callback-style async `fs.readFile` part into `async/await` using `fs/promises`.

### 5) NPM & project setup
Learn:
- `package.json`
- `dependencies`
- `scripts`

Practice:
- add a new script for a new example file (e.g., `npm run read-me`).

### 6) Build APIs with Express
Learn:
- routing (`app.get`, `app.post`)
- `req` and `res`
- JSON responses
- middleware (later)

Practice (in this folder):
- `express-server.js`
  - add more endpoints like `/api/health` and `/api/echo`.

## Suggested next 3 exercises (fast wins)

1. Run & confirm
   - Run: `npm run hello`, `npm run show-index`, then start Express.

2. Add a new endpoint
   - Add `GET /api/health` returning `{ "ok": true }`.

3. Modernize async code
   - Update the async part of `first-code.js` to use `fs/promises` + `await`.

## Progress checklist

- [ ] `npm run hello` works
- [ ] `npm run show-index` works
- [ ] `npm run start:express` works
- [ ] `GET /` works
- [ ] `GET /api/person` works
- [ ] You added `GET /api/health`
- [ ] You rewrote file reading using async/await
