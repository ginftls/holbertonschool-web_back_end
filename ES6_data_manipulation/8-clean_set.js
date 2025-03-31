export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new TypeError('First argument must be a Set');
  }

  if (typeof startString !== 'string') {
    throw new TypeError('Second argument must be a string');
  }

  if (startString === '') {
    return '';
  }

  return Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('_');
}
