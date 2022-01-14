function encode(str) {
  // seu código aqui
  str = str.split('');
  for(let i in str){
    if(str[i] == 'a'){
      str[i] = "1";
    }
    if(str[i] == 'e'){
      str[i] = "2";
    }
    if(str[i] == 'i'){
      str[i] = "3";
    }
    if(str[i] == 'o'){
      str[i] = "4";
    }
    if(str[i] == 'u'){
      str[i] = "5";
    }
  }
  str = str.join("");
  return str;
}

function decode(str) {
  // seu código aqui
  str = str.split('');
  for(let i in str){
    if(str[i] === '1'){
      str[i] = "a";
    }
    if(str[i] === '2'){
      str[i] = "e";
    }
    if(str[i] === '3'){
      str[i] = "i";
    }
    if(str[i] === '4'){
      str[i] = "o";
    }
    if(str[i] === '5'){
      str[i] = "u";
    }
  }
  str = str.join("");
  return str;
}

module.exports = {encode, decode};