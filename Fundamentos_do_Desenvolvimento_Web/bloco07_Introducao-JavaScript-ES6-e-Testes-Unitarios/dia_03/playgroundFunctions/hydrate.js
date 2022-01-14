function hydrate(str) {
  // seu código aqui
  str = str.split(" ");
  let agua = 0;
  for(let i in str){
    if(str[i] < 9999999999 && str[i] > 0){
      agua += parseInt(str[i]);
    }
  }
  if(agua > 1){
    return (agua + " copos de água");
  }
  return (agua + " copo de água");
}

module.exports = hydrate;