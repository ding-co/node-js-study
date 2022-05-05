console.log('hello world');
console.log('hello %s', 'world');

const world = 'world';
console.log(`hello ${world}`);

console.error(new Error('에러 메시지 출력'));

const arr = [
  { name: 'John Doe', email: 'john@gmail.com' },
  { name: 'Jeremy Go', email: 'jeremy@gmail.com' },
];

console.table(arr);

const obj = {
  students: {
    grade1: { class1: {}, class2: {} },
    grade2: { class1: {}, class2: {} },
    teachers: ['John Doe', 'Jeremy Go'],
  },
};

console.dir(obj, { depth: 2, colors: true });

console.time('time for for-loop');
for (let i = 0; i < 999999; i + 1) {}
console.timeEnd('time for for-loop');
