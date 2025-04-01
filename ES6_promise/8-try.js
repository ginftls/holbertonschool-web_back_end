/* eslint-disable */
export default function divideFunction(numerator, denominator) {
  // Check if the denominator is 0
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }

  // Perform the division and return the result
  return numerator / denominator;
}
