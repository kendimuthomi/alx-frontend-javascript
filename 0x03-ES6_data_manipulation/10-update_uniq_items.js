export default function updateUniqueItems(map) {
  const newList = map;

  if (newList instanceof Map) {
    for (const [key, value] of newList) {
      if (value === 1) {
        newList.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return newList;
}
