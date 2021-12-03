let header = document.getElementById("header-container");
let section1 = document.querySelector(".emergency-tasks");
let section2 = document.querySelector(".no-emergency-tasks");
let section11 = document.querySelectorAll(".emergency-tasks h3");
let section21 = document.querySelectorAll(".no-emergency-tasks h3");
let footer = document.getElementById("footer-container");

footer.style.backgroundColor = "blue";
header.style.backgroundColor = "green";

section1.style.backgroundColor = "pink";
section2.style.backgroundColor = "yellow";
for(let j in section11 && section21){
    section11[j].style.backgroundColor = "purple";
    section21[j].style.backgroundColor = "black";
}
