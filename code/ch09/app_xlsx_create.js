const xlsx = require('xlsx');
const workbook = xlsx.utils.book_new();

const customers = [
  { A: '고객명', B: '이메일', C: '연략처' },
  { A: '유재석', B: 'ryu@gmail.com', C: '010-0000-1111' },
  { A: '김종국', B: 'kim@gmail.com', C: '010-0000-2222' },
  { A: '지석진', B: 'ji@gmail.com', C: '010-0000-3333' },
  { A: '하하', B: 'ha@gmail.com', C: '010-0000-4444' },
];

const firstSheet = xlsx.utils.json_to_sheet(customers, {
  header: ['A', 'B', 'C'],
  skipHeader: true,
});

firstSheet['!cols'] = [{ wpx: 120 }, { wpx: 250 }, { wpx: 250 }];

xlsx.utils.book_append_sheet(workbook, firstSheet, 'Customers');

xlsx.writeFile(workbook, './xlsx/customers.xlsx');
