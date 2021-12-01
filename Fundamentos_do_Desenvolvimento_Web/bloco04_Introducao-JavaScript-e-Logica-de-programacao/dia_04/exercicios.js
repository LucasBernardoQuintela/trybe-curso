let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//1.
console.log("1.\nBem-vinda, " + info.personagem);

//2.
info['recorrente'] = 'Sim';
console.log("2.");
for(let key in info){
    console.log(key + ": '" + info[key] + "'");
}

//3.
console.log("3.");
for(key in info){
    console.log(key);
}

//4.
console.log("4.");
for(key in info){
    console.log(info[key]);
}

//5.
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
};
info2['recorrente'] = 'Sim';
for(key in info){
    if(key === 'recorrente'){
        console.log("Ambos recorrentes")
    }else{
        console.log(info[key] + " e " + info2[key])
    }
}


let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

//6.
console.log("6.");
console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo +"'");

//7 e 8.
console.log("7 e 8.");
leitor.livrosFavoritos[1] ={
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
}
console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");