# Learn Node.js

A comprehensive learning repository covering Node.js fundamentals, Express.js, and practical project implementations. This repo contains practice exercises, mini-projects, and learning lessons to master Node.js development.

## 📁 Project Structure

```
learn-nodeJS/
├── simple-codes/              # Basic Node.js exercises and implementations
│   ├── first-code.js         # Hello World and basic Node.js concepts
│   ├── express-server.js     # Express server setup example
│   ├── fs-module.js          # File system operations
│   ├── path.js               # Path module usage
│   ├── prompt.js             # User input handling
│   ├── helpers.js            # Utility helper functions
│   ├── http-sever/           # HTTP server examples
│   │   ├── server.js         # Basic HTTP server
│   │   └── multi-request.js  # Handling multiple requests
│   ├── notes-manager/        # Notes management mini-app
│   │   ├── app.js            # Main application
│   │   ├── notesManager.js   # Notes logic
│   │   └── notes.json        # Data storage
│   └── package.json          # Dependencies and scripts
│
├── learnyounode-lessons/      # learnyounode tutorial solutions
│   ├── baby-steps.js         # Basic Node.js exercises
│   └── hello-world.js        # Hello World implementation
│
├── Express/                   # Express.js projects (empty - for future use)
├── mini-project/             # Mini project templates (empty - for future use)
└── README.md                 # This file
```

## 🚀 Getting Started

### Installation

1. Install Node.js and npm from [nodejs.org](https://nodejs.org/)
2. Navigate to the project directory:
   ```bash
   cd learn-nodeJS
   ```
3. Install dependencies:
   ```bash
   cd simple-codes
   npm install
   ```

## 📚 Learning Modules

### 1. Simple Codes
Basic Node.js fundamentals and utilities:
- **first-code.js** - Introduction to Node.js, console logging
- **fs-module.js** - File system operations (read, write, append)
- **path.js** - Working with file paths across different OS
- **prompt.js** - Handling user input via command line
- **helpers.js** - Creating and using utility functions
- **express-server.js** - Basic Express server setup

### 2. HTTP Server
Practical HTTP server implementations:
- **http-sever/server.js** - Simple HTTP server
- **http-sever/multi-request.js** - Handling multiple concurrent requests
- **http-sever/public/** - Static files serving

### 3. Notes Manager
A mini project demonstrating:
- File I/O operations with JSON
- Command-line argument parsing
- Data persistence
- CRUD operations (Create, Read, Update, Delete)

### 4. LearnyouNode Lessons
Solutions to the popular learnyounode npm tutorial covering:
- Node.js basics
- Async operations
- Module creation
- Core modules usage

## 📝 Available Scripts

From `simple-codes/` directory:

```bash
npm run hello          # Run first-code.js - Basic introduction
npm run show-index    # Run use-index.js - Module demonstration
npm run start:express # Start Express server on port 3000
```

## 🔧 Key Topics Covered

- **Core Modules**: fs, path, http, util
- **npm & Packages**: Managing dependencies, package.json
- **Synchronous vs Asynchronous**: Callbacks, Promises, async/await
- **File Operations**: Read, write, append, delete files
- **HTTP Servers**: Creating and managing HTTP servers
- **Express.js**: Routing, middleware, server setup
- **Command-line Arguments**: Processing user input
- **JSON Data**: Storing and retrieving data
- **Module System**: Creating and importing modules

## 📖 How to Use

1. **Start with basic concepts**: Begin in `simple-codes/` folder
   - Run `npm run hello` to see Node.js basics
   - Explore individual files to understand each concept

2. **Learn HTTP servers**: Check `simple-codes/http-sever/`
   - Understand how to create and handle HTTP requests

3. **Build projects**: Use `notes-manager/` as a template
   - Demonstrates file I/O, arguments parsing, and data management

4. **Reference tutorials**: Check `learnyounode-lessons/`
   - Contains solutions to official Node.js tutorial exercises

## 🛠️ Dependencies

- **express** - Web application framework for Node.js
- **prompt** - Interactive command-line prompts
- **nodemon** - Development tool for auto-restarting on file changes

## 📌 Tips & Best Practices

- Use `nodemon` during development for automatic restart: `nodemon filename.js`
- Keep modules small and focused on single responsibility
- Use async/await for cleaner asynchronous code
- Always handle errors in file operations
- Use environment variables for configuration

## 🎯 Next Steps

- Explore `Express/` folder for more advanced server implementations
- Create projects in `mini-project/` folder using learned concepts
- Integrate databases (MongoDB, PostgreSQL) with Node.js
- Learn about authentication and authorization
- Deploy Node.js applications to cloud platforms

## 📄 License

Educational repository for learning purposes.
