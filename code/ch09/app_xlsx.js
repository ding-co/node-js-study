const xlsx = require('xlsx');

const workbook = xlsx.readFile('./xlsx/test.xlsx');
const firstSheetName = workbook.SheetNames[0];
const firstSheet = workbook.Sheets[firstSheetName];

const firstSheetJson = xlsx.utils.sheet_to_json(firstSheet);

// console.log(firstSheetJson);
// console.log(firstSheet['A2']);

firstSheet['B2'].v = 'john@gmail.com';
firstSheet['A3'] = { t: 's', v: 'ding-co' };

xlsx.writeFile(workbook, './xlsx/test2.xlsx');
