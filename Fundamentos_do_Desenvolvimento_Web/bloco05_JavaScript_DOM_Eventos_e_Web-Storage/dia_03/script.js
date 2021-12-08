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
holidayBtn.addEventListener('click', showHoliday);
let feriados = document.getElementsByClassName('holiday')
function showHoliday(){
  if (feriados[0].style.backgroundColor != 'blue'){
    for (let i = 0; i < feriados.length; i+=1){
      feriados[i].style.backgroundColor = "blue";
      feriados[i].style.color = "white";

    }
  }else{
    for (let i = 0; i < feriados.length; i+=1){
      feriados[i].style.backgroundColor = "rgb(238,238,238)";
      feriados[i].style.color = "#777";
    }
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

//5.
const fridayBtn = document.getElementById('btn-friday');
fridayBtn.addEventListener('click', showFriday);
function showFriday(){
  let sexta = document.getElementsByClassName('friday')
  if (sexta[0].style.backgroundColor != 'yellow'){
    for (let i = 0; i < sexta.length; i+=1){
      sexta[i].style.backgroundColor = "yellow";
      sexta[i].style.color = "white";

    }
  }else{
    for (let i = 0; i < sexta.length; i+=1){
      sexta[i].style.backgroundColor = "rgb(238,238,238)";
      sexta[i].style.color = "#777";
    }
  }
}

//6.
let dias = document.getElementsByClassName('day');
for(let j = 0; j < dias.length; j+=1){
  dias[j].addEventListener('mouseover', mouseCima);
  dias[j].addEventListener('mouseleave', mouseSai);
}

function mouseCima(event){
  let item = event.target;
  item.style.fontSize = '2em';
}


function mouseSai(event){
  let item = event.target;
  item.style.fontSize = '20px';
}

//7.
function addTask(str){
  let span = document.createElement('span');
  span.innerHTML = str;
  document.getElementsByClassName('my-tasks')[0].appendChild(span);
}

addTask('cozinhar');

//8.
function addDescription(str){
  let description = document.createElement('div');
  description.style.backgroundColor = str;
  description.className = 'task';
  description.addEventListener('click',addTaskStatus);
  document.getElementsByClassName('my-tasks')[0].appendChild(description);
}

addDescription('blue');

//9.
function addTaskStatus(event){
  let item = event.target;
  item.classList.add('selected');
  item.removeEventListener('click',addTaskStatus);
  item.addEventListener('click', rmvTaskStatus);
}

function rmvTaskStatus(event){
  let item = event.target;
  item.classList.remove('selected');
  item.removeEventListener('click', rmvTaskStatus);
  item.addEventListener('click', addTaskStatus);
}

//10.
for(j = 0; j < dias.length; j+=1){
  dias[j].addEventListener('click', addStatusColor);
}

function addStatusColor(event){
  let item = event.target;
  item.style.color = document.getElementsByClassName('selected')[0].style.backgroundColor;
}