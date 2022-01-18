const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAws = (right, student) =>{
  let nota = 0;
  for (let index = 0; index < right.length; index += 1) {
    if (student[index] == right[index]) {
      nota += 1;
    } else if (student[index] == 'N.A') {
      nota += 0;
    }else { nota += 0.5; }
  }
  return nota;
}

const testScore = (right, student, func) => func(right, student);

console.log(testScore(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAws));