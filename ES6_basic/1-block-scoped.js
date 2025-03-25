export default function taskBlock(trueOrFalse) {
  let task = false; // Use 'let' for block-scoping
  let task2 = true; // Use 'let' for block-scoping

  if (trueOrFalse) {
    let task = true; // Declare a new block-scoped variable
    let task2 = false; // Declare a new block-scoped variable
  }

  return [task, task2];
}
