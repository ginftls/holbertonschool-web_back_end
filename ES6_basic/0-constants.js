// 0-constants.js

export function taskFirst() {
  const task = 'I prefer const when I can.'; // Use `const` because the value of `task` does not change.
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; // Use `let` because the value of `combination` will be reassigned.
  combination += getLast(); // Reassigning the value of `combination`.

  return combination;
}
