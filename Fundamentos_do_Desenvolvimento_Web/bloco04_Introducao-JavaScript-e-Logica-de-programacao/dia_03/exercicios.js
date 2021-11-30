let n = 5;
//n = 6

//1.
console.log("1. ");
for(let i=0; i < n; i+=1){
    let resultado = "";
    for(let j=0; j < n; j+=1){
        resultado += "*";
    }
    console.log(resultado);
}

//2.
console.log("\n2. ");
let resultado2 = "";
for( i=0; i < n; i+=1){
    resultado2 += "*";
    console.log(resultado2);
}

//3.
console.log("\n3. ");
let resultado3 = "";
for( i=1; i <= n; i+=1){
    console.log(" ".repeat(n-i) + "*".repeat(i));
}

//4.
console.log("\n4. ");
let numNiveis = 0;
let aspas = 0;
for(i=n ; i >= 1; i-=2){
    numNiveis+=1
}
if(n%2 != 0){
    aspas = 1
}else{
    aspas = 2
}

for(i=1; i <= numNiveis; i+=1){
    if(aspas < (n-2)){
        console.log(" ".repeat((n-i)-(aspas+1)) + "*".repeat(aspas))
    }else if(aspas == (n-2)){
        console.log(" " + "*".repeat(aspas))
    }else{
        console.log("*".repeat(aspas))
    }
    aspas+=2
}