const pHatButton = document.querySelector("#pHatButton");
const HoButton = document.querySelector("#HoButton");
const HaButton = document.querySelector("#HaButton");
const nButton = document.querySelector("#nButton");

pHatButton.addEventListener('click', getpHatInput);
HoButton.addEventListener('click', getHoInput);
HaButton.addEventListener('click', getHaInput);
nButton.addEventListener('click', getNInput);

function getpHatInput() {
    pHat = prompt("Sorry, please type your answer here instead.");
    console.log(pHat);
    
}

function getHoInput() {
    Ho = prompt("Sorry, please type your answer here instead.");
}

function getHaInput() {
    HaInput = prompt("Sorry, please type your answer here instead.");
    return HaInput;
}

function getNInput() {
    NInput = prompt("Sorry, please type your answer here instead.");
    return NInput;
}

