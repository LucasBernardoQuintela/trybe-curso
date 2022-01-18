const checkNum = (num, random) => {
  // num !== random ? 'Tente novamente' : 'Parabéns você ganhou';
  if (num == random) { return 'Parabéns você ganhou'; }
  return 'Tente novamente';
}

const result = (num, func) => {
  const random = Math.floor(Math.random() * 5);
  return func(num,random);
}

console.log(result(2,checkNum));