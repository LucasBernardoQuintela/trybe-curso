// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  if (typeof id != 'string' || id.split('').length != 6) {
    throw new Error('Formato do id está errado');
  }
  for (let i in professionalBoard) {
    if (professionalBoard[i].id == id) {
      let info = '';
      for (let x in detail) {
        const lista = Object.keys(professionalBoard[i]);
        for (let j = 0; j < lista.length; j += 1) {
          if (detail[x] == lista[j]) {
            if (x == 0) {
              info = `${Object.values(professionalBoard[i][lista[j]]).join('')}`;
            } else if (detail[x] != 'specialities'){
              info = `${info}, ${Object.values(professionalBoard[i][lista[j]]).join('')}`;
            } else {
              info = `${info}, [${Object.values(professionalBoard[i][lista[j]]).join('')}]`;
            }
          }
        }
      }
      return info;
    }
  }
  throw new Error('ID não identificada');
};

module.exports = searchEmployee;