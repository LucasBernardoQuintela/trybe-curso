const url = `https://api.coincap.io/v2/assets`;

const placeCrypto = (list) => {
  const crypto = list.data;
  for (let index = 0; index < 10; index += 1) {
    const li = document.createElement('li');
    li.innerText =`${crypto[index].rank} - ${crypto[index].name} - 1 ${crypto[index].symbol} = ${crypto[index].priceUsd} USD`;
    document.getElementById('containerCrypto').appendChild(li);
  }
};


const fetchCrypto = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(url, myObject)
    .then(resp => resp.json())
    .then(data => placeCrypto(data))
    .catch(err => console.log(err));
}

window.onload = () => fetchCrypto();