const fs = require('fs');

// 비동기 파일 읽기
fs.readFile('./sample/text.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// 동기 파일 읽기
const text1 = fs.readFileSync('./sample/text.txt', 'utf8');
console.log(text1);

// 비동기 파일 쓰기
let data = '파일 쓰기 테스트';
fs.writeFile('./sample/text_w.txt', data, 'utf8', (err) => {
  if (err) throw err;
  console.log('비동기적 파일 쓰기 완료');
});

// 동기 파일 쓰기
let data2 = '파일 쓰기 테스트';
fs.writeFileSync('./sample/text_w2.txt', data, 'utf8');
console.log('동기적 파일 쓰기 완료');

// watch file
const sql = require('./sql.js');

fs.watchFile(__dirname + '/sql.js', (curr, prev) => {
  console.log('sql 변경 시 재시작 없이 반영되도록 함.');
  delete require.cache[require.resolve('./sql.js')];
  sql = require('./sql.js');
});
