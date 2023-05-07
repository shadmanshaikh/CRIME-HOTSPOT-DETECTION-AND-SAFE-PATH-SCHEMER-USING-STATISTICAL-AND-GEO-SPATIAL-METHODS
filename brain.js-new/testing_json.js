fetch('https://api.chucknorris.io/jokes/random?category=dev').
then(res => res.json()).then(data => console.log(data.id[1]))

// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//   .then(response => response.json())
//   .then(commits => console.log(commits[0].author.login));