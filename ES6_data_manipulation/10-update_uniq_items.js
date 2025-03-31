/*eslint-disable*/
export default function updateUniqueItems(map) {
  // Validate that the input is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the Map and update quantities
  for (const [item, quantity] of map.entries()) {
    if (quantity === 1) {
      map.set(item, 100);
    }
  }

  // Return the updated Map
  return map;
}
