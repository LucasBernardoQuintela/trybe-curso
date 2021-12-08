let body = document.getElementsByTagName('body')[0];
const h1 = document.getElementById('mainHeader');
const mainP = document.getElementById('mainText');
const h2 = document.getElementById('articleHeader');
const secondP = document.getElementById('articleText');
const inpBackground = document.getElementById('backgroundColor');
const btnBackground = document.getElementById('backgroundColorBtn');
const inpTextColor = document.getElementById('textColor');
const btnTextColor = document.getElementById('textColorBtn');
const inpFontSize = document.getElementById('fontSize');
const btnFontSize = document.getElementById('fontSizeBtn');
const inpLineSpacing = document.getElementById('lineSpacing');
const btnLineSpacing = document.getElementById('lineSpacingBtn');
const inpFontFamily = document.getElementById('fontFamily');
const btnFontFamily = document.getElementById('fontFamilyBtn');

//Cor de fundo
btnBackground.addEventListener('click', alteraBg);

function alteraBg(){
  let texto = inpBackground.value;
  body.style.backgroundColor = texto;
}

//cor do texto
btnTextColor.addEventListener('click', alteraTC);

function alteraTC(){
  let texto = inpTextColor.value;
  body.style.color = texto;
}

//Tamanho da fonte
btnFontSize.addEventListener('click', alteraFs);

function alteraFs(){
  let texto = inpFontSize.value;
  body.style.fontSize = texto;
}

//Tamanho do espaçamento
btnLineSpacing.addEventListener('click', alteraLS);

function alteraLS(){
  let texto = inpLineSpacing.value;
  body.style.lineHeight = texto;
}

//Tipo da fonte
btnFontFamily.addEventListener('click', alteraFF);

function alteraFF(){
  let texto = inpFontFamily.value;
  body.style.fontFamily = texto;
}