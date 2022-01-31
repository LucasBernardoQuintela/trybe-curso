// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(resp => resp.json())
    .then(data => {
      document.getElementById('jokeContainer').innerText = data.joke;
    })
    .catch(err => {
      document.getElementById('jokeContainer').innerText = err;
    });
};

window.onload = () => fetchJoke();