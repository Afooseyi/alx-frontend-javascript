export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flat();
  let currentIndex = 0;

  return {
    next() {
      if (currentIndex < employees.length) {
        return { value: employees[currentIndex++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}
