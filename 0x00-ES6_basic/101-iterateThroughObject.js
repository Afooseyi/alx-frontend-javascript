export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  const iterator = reportWithIterator();

  let next = iterator.next();
  while (!next.done) {
    result += next.value;
    next = iterator.next();
    if (!next.done) {
      result += ' | ';
    }
  }

  return result;
}
