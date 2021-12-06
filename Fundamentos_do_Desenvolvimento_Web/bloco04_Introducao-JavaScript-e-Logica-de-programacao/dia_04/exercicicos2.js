//1.
function quest1(p){
    if((p.toLowerCase() == p.split("").reverse().join(""))){
        return true;
    }else{
        return false;
    }
}
console.log("1.");
//console.log(quest1('desenvolvimento'));
console.log(quest1('arara'));

//2.
function quest2(num){
    let maior = 0;
    let index = 0;
    for(i in num){
        if(maior < num[i]){
            maior = num[i];
            index = i;
        }
    }
    return index;
}

let sequencia =  [2, 3, 6, 7, 10, 1];
console.log("2. ");
console.log(quest2(sequencia));

//3.
function quest3(num){
    let menor = 9999999;
    let index = 0;
    for(i in num){
        if(menor > num[i]){
            menor = num[i];
            index = i;
        }
    }
    return index;
}

let sequencia2 =  [2, 4, 6, 7, 10, 0, -3];
console.log("3. ");
console.log(quest3(sequencia2));

//4.
function quest4(a){
    let maior = '';
    for(let key in a){
        if(maior.length < a[key].length){
            maior = a[key];
        }
    }
    return maior;
}
let test = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log("4.");
console.log(quest4(test));

//5.
function quest5(a){
    let num1=0;
    let index=0;
    for(let i=0; i < a; i+=1){
        let num =0;
        for(let j in a){
            if(a[i] == a[j]){
                num+=1;
            }
        }
        if(num > num1){
            index = i;
            num1 = num;
        }
    }
    return a[index];
}
test = [2, 3, 2, 5, 8, 2, 3];
console.log("5.");
console.log(quest5(test));

//6.
function quest6(num){
    let soma=0;
    for(let i=num; i > 0; i-=1){
        soma +=i;
    }
    return soma;
}
let n=5;
console.log("6.");
console.log(quest6(n));

//7.
function quest7(str,str1){
    for(let i= 0; i < str1.length; i+=1){
        if(str1[i] != str[(str.length - str1.length)+i]){
            return false;
        }
    }
    return true;
}
console.log("7.");
console.log(quest7('trybe', 'be'));
