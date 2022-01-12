// 1.1-

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// 1.2-
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const ordenar = (lista) => {
  for (let x = 0; x < lista.length; x += 1){
    for (let i = 0; i < lista.length; i += 1) {
      if (lista[i] > lista[i + 1]) {
        let temp = lista[i + 1];
        lista[i + 1] = lista[i];
        lista[i] = temp;
      }
    }
  }
  return lista;
}

console.log(ordenar(oddsAndEvens));

// 2.1-
const fatorial = (num) => {
  let resultado = 1;
  for (let i = 1; i <= num; i += 1) {
    resultado = resultado * i;
  }
  return resultado;
}

console.log(fatorial(5));

// 2.2-
const longestWord = (str) => {
  str = str.split(' ');
  let numLetras = 0;
  let maior = '';
  for (let i = 0; i < str.length; i += 1) {
    str[i].length > numLetras ? maior = i : '';
  }
  return str[maior];
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// 2.3-
// comentado para poder rodar o codigo no vscode
// document.getElementsByTagName('button')[0].addEventListener('click', () => {
//   let num = document.getElementsByTagName('p')[0].innerText;
//   num = parseInt(num) + 1;
//   console.log(num);
//   document.getElementsByTagName('p')[0].innerText = num;
// })

// 2.4-
const listaSkill = ['lógica', 'empatia', 'ensinar'];

const quest4 = (str) => {
  let frase = 'Tryber x aqui! Minhas cinco principais habilidades são:';
  frase = frase.split('');
  for (let i = 0; i < frase.length; i += 1) {
    if (frase[i] == 'x' || frase[i] == 'X') {
      frase[i] = `${str}`;
      frase = frase.join('');
      return frase;
    }
  }
}

const quest4_2 = (str,lista) => {
  lista = lista.sort();
  str = `${str} ${lista}`;
  return str;
}

console.log(quest4_2(quest4('Lucas'), listaSkill));