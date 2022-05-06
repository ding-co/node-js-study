const myURL = new URL(
  'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
);

console.log(myURL.hash);

myURL.hash = 'baz';
console.log(myURL.href);

console.log(myURL.searchParams.get('query'));
console.log(myURL.searchParams.has('query'));
console.log(myURL.searchParams.keys());
console.log(myURL.searchParams.values());
myURL.searchParams.append('user', 'admin');
myURL.searchParams.append('user', 'admin');
console.log(myURL.searchParams.getAll('user'));
myURL.searchParams.set('user', 'admin');
myURL.searchParams.delete('user');
console.log(myURL.searchParams.toString());

const url = require('url');
console.log(
  url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash')
);
