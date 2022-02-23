"use strict";
const convert = (valor, base, cvrt) => {
    const unities = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km'];
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
console.log(`1000m = ${convert(1000, 'm', 'km')}km`);
console.log(`1m = ${convert(1, 'm', 'mm')}mm`);
console.log(`1km = ${convert(1, 'km', 'mm')}mm`);
