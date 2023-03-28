export const weakMap = new WeakMap();
export default function queryAPI(endpoint) {
  const { protocol, name } = endpoint;
  const key = `${protocol}:${name}`;

  let count = weakMap.get(key) || 0;
  count += 1;

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(key, count);
  }
}
