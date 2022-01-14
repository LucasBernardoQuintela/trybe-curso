function techList(lista,name) {
  if(lista.length < 2){
    return "Vazio!";
  }else{
    let objeto = [];
    lista = lista.sort();
    for(let i in lista){
      let novoObjeto = {
        tech: lista[i],
        name: name
      };
      objeto.push(novoObjeto);
    }
    return objeto;
  }
}

module.exports = techList;