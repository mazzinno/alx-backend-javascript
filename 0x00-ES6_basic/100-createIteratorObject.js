export default function createIteratorObject(report) {
  let employees = [];
  for (const item of Object.values(report.allEmployees)) {
    employees = [...employees, ...item];
  }
  return employees;
}
