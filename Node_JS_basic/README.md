# NodeJS Basics

This project contains basic NodeJS exercises to practice core concepts.

## Requirements
* All code runs on Ubuntu 20.04 LTS using Node.js 20.x
* Code follows the specified ESLint rules
* All files end with a new line
* All functions/classes are exported using the format: `module.exports = myFunction;`

## Setup
```bash
npm install
```

## Testing
* Run tests: `npm run test`
* Run ESLint checks: `npm run lint`
* Run full tests: `npm run full-test`

## Tasks

### 0. Executing basic javascript with Node JS
* File: `0-console.js`
* Description: Implementation of a function named `displayMessage` that prints in STDOUT the string argument provided.
* Example usage:
```javascript
const displayMessage = require('./0-console');
displayMessage("Hello NodeJS!");
// Output: Hello NodeJS!
```
