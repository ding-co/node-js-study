fetch('http://localhost:3000/posts/2', {
  method: 'PUT',
  body: JSON.stringify({
    title: 'ding-co',
    author: 'ding-co',
  }),
  headers: {
    'content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
