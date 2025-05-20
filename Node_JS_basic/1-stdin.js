/**
 * A program that interacts with user input from stdin
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set up stdin to handle user input
process.stdin.setEncoding('utf8');

// Listen for user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  
  // If the input is coming from a pipe (not a terminal),
  // we should display the closing message and exit
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});

// Handle the end of stdin (Ctrl+D)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit();
});

// Export an empty object to satisfy the module.exports requirement
module.exports = {};
