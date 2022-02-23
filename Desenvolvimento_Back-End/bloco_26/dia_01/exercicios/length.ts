const convert = (valor: number, base: string, cvrt: string): number => {
  const unities: string[] = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km'];
  let iAntigo: number = 0;
  let iNovo: number = 0;
  for (let index = 0; index < unities.length; index += 1) {
    if (unities[index] === base) {
      iAntigo = index + 1;
    }
    if (unities[index] === cvrt) {
      iNovo = index + 1;
    }
  }
  valor = valor * (Math.pow(10, iAntigo - iNovo))
  return valor;
}

console.log(`1000m = ${convert(1000, 'm', 'km')}km`);
console.log(`1m = ${convert(1, 'm', 'mm')}mm`);
console.log(`1km = ${convert(1, 'km', 'mm')}mm`);
