const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addTurno(obj, key, value) {
  obj[key] = value;
  return Object.values(obj);
}

console.log(addTurno(lesson2, 'turno','noite'));

function listaKeys(obj) {
  return Object.keys(obj);
}

console.log(listaKeys(lesson1));

function tamanhoObj(obj) {
  return Object.entries(obj).length;
}

console.log(tamanhoObj(lesson3));

function listaValues(obj) {
  return Object.values(obj);
}

console.log(listaValues(lesson1));

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
};
Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);
console.log(allLessons);

function numEst(obj) {
  const s1 = Object.values(obj.lesson1.numeroEstudantes).join('');
  const s2 = Object.values(obj.lesson2.numeroEstudantes).join('');
  const s3 = Object.values(obj.lesson3.numeroEstudantes).join('');
  return `O número total de estudantes é: ${s1+s2+s3}`;
}

console.log(numEst(allLessons));

function indexKey(obj, num) {
  const lista = Object.values(obj);
  return lista[num];
}

console.log(indexKey(lesson1 ,0));

function verifica(obj, key, value) {
  const listaK = Object.keys(obj);
  const listaV = Object.values(obj);
  let sum = 0;
  for (let i in listaK) {
    listaK[i] == key ? sum += 1 : '';
    listaV[i] == value ? sum += 1 : '';
    console.log(sum);
  }
  if (sum == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(verifica(lesson2, 'turno', 'noite'));
