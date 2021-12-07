function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.
//1.
function createDaysofMonth(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let ul = document.getElementById('days');
  for(let i in dezDaysList){
    let li = document.createElement('li');
    li.innerText = dezDaysList[i];
    li.className = 'day';
    if(dezDaysList[i] == 24 || dezDaysList[i] == 25 || dezDaysList[i] == 31){
      li.classList.add('holiday');
    }
    if(i == 5 || i == 12 || i == 19 || i == 26){
      li.classList.add('friday');
    }
    ul.appendChild(li);
  }
}

createDaysofMonth();

//2.
function feriadosBtn(str){
  let btn = document.createElement('btn');
  btn.innerText = str;
  btn.id = 'btn-holiday';
  document.getElementsByClassName('buttons-container')[0].appendChild(btn);
}

feriadosBtn('Feriados');

//3.
const holidayBtn = document.getElementById('btn-holiday');
holidayBtn.addEventListener('click', addColortoBtnOnClick);
function addColortoBtnOnClick(){
  let feriados = document.getElementsByClassName('holiday')
  for (let i in feriados){
    feriados[i].style.color = 'blue';
  }
}

//4.
function criaBtnFriday(str){
  let btn = document.createElement('btn');
  btn.innerText = str;
  btn.id = 'btn-friday';
  document.getElementsByClassName('buttons-container')[0].appendChild(btn);
}

criaBtnFriday('Sexta-feira');