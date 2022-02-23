"use strict";
const converte = (valor, base, cvrt) => {
    const unities = ['mg', 'cg', 'dg', 'g', 'dag', 'hg', 'kg'];
    let iAntigo = 0;
    let iNovo = 0;
    for (let index = 0; index < unities.length; index += 1) {
        if (unities[index] === base) {
            iAntigo = index + 1;
        }
        if (unities[index] === cvrt) {
            iNovo = index + 1;
        }
    }
    valor = valor * (Math.pow(10, iAntigo - iNovo));
    return valor;
};
console.log(`1000g = ${converte(1000, 'g', 'kg')}kg`);
console.log(`1g = ${converte(1, 'g', 'mg')}mg`);
console.log(`1kg = ${converte(1, 'kg', 'mg')}mg`);
