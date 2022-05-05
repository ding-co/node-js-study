const path = require('path');

console.log(__filename);
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

console.log(path.delimiter);
console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));

console.log(__filename);
console.log(path.dirname(__filename));

console.log(path.extname('index.html'));

console.log(
  path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt',
  })
);

console.log(
  path.format({
    root: '/',
    base: 'file.txt',
    ext: 'ignored',
  })
);

console.log(
  path.format({
    root: '/',
    name: 'file',
    ext: '.txt',
  })
);

console.log(path.join('/foo', 'bar', 'baz/asdf'));

console.log(path.parse('/home/user/dir/file.txt'));

console.log(path.sep);
console.log('foo/bar/baz'.split(path.sep));
