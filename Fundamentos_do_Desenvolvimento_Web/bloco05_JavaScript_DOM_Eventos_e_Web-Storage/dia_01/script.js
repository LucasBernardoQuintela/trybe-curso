let quest1 = document.querySelector("p");

quest1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

let quest2 = document.querySelector(".main-content");

quest2.style.backgroundColor = "rgb(76,164,109)";

let quest3 = document.querySelector(".center-content");

quest3.style.backgroundColor = "white";

let quest4 = document.querySelector(".title");

quest4.innerText = "Exercício 5.1 - JavaScript";

let quest5_e_6 = document.querySelectorAll("p");

for(let i in quest5_e_6){
    quest5_e_6[i].style.textTransform = "uppercase";
    console.log(quest5_e_6[i].innerText);
}

