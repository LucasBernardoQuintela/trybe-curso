const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const count = (acc, curr) => {
  if (curr === 'a' || curr === 'A' ) {
    acc += 1;
  }
  return acc;
}

function containsA() {
  // escreva seu código aqui
  let sum = 0;
  names.forEach( (index) => sum += index.split('').reduce(count, 0)); 
  return sum;
}

console.log(containsA());