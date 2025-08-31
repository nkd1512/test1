interface Employee {
  id: string;
  name: string;
  position: string;
  salary: number;
}

const employees: Employee[] = [
  { id: 'E001', name: 'Alice', position: 'Manager', salary: 75000 },
  { id: 'E002', name: 'Bob', position: 'Developer', salary: 60000 },
  { id: 'E003', name: 'Charlie', position: 'Designer', salary: 55000 },
];

function findEmployeeByName(name: string): Employee | undefined {
  return employees.find(employee => employee.name === name);
}

console.log('--- การจัดการพนักงาน ---');
const foundEmployee = findEmployeeByName('Bob');
if (foundEmployee) {
  console.log(`พบพนักงาน:`);
  console.log(`ID: ${foundEmployee.id}`);
  console.log(`ชื่อ: ${foundEmployee.name}`);
  console.log(`ตำแหน่ง: ${foundEmployee.position}`);
  console.log(`เงินเดือน: ${foundEmployee.salary}`);
} else {
  console.log('ไม่พบพนักงานชื่อ Bob');
}
