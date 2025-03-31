/*eslint-disable */
export default function hasArrayValues(set, array) {
  if (!(set instanceof Set)) {
    throw new TypeError('First argument must be a Set');
  }
  
  if (!Array.isArray(array)) {
    throw new TypeError('Second argument must be an array');
  }

  return array.every((element) => set.has(element));
}
