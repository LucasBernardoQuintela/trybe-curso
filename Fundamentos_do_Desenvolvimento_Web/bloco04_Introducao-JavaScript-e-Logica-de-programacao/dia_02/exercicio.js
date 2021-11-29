let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1.
console.log("1.\n");
for (let i=0; i < numbers.length; i+=1){
    console.log(numbers[i])
}

//2.
let soma = 0;
for (i=0; i < numbers.length; i+=1){
    soma += numbers[i]
}
console.log("\n2. " + soma);

//3.
let media = soma/10;
console.log("3. " + media);

//4.
if(media > 20){
    console.log("4. Valor maior que 20")
}else{
    console.log("4. Valor menor que 20")
}

//5.
let maior = 0;
for(i=0; i < numbers.length; i+=1){
    if(maior <= numbers[i]){
        maior = numbers[i]
    }
}
console.log("5. " + maior);

//6.
let qntImpar = 0;
for(i=0; i < numbers.length; i+=1){
    if(numbers[i] % 2 != 0){
        qntImpar+=1
    }
}
if(qntImpar != 0){
    console.log("6. " + qntImpar)
}else{
    console.log("6. nenhum valor impar encontrado")
}

//7.
let menor = 999999;
for(i=0; i < numbers.length; i+=1){
    if(menor >= numbers[i]){
        menor = numbers[i]
    }
}
console.log("7. " + menor);

//8.
let array = [];
for(i=1; i <= 25; i+=1){
    array.push(i)
}
console.log("8. " + array)

//9.
let arraydiv2 = [];
for(i=0; i <= array.length; i+=1){
    arraydiv2.push(array[i]/2)
}
console.log("9. " + arraydiv2)