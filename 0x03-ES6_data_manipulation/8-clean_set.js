export default function cleanSet(set, startString) {
  const newList = [];

  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  for (const value of set) {
    if (value && value.startsWith(startString)) {
      newList.push(value.slice(startString.length));
    }
  }
  return newList.join('-');
}
