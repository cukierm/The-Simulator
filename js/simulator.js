var pHat = .6;
var Ho = .5;
var Ha = ">";
var n = 25;


const numSims = 50;

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



function computeSampleProp(probSuccess, sampleSize) {
    let successes = 0;
    for (let i=0; i<sampleSize; i++) {
        if (Math.random() < probSuccess) {
            successes++;
        }      
    }
    return successes/sampleSize;
}

    function computeSamples() {  
        let j = 0;
        document.getElementById("output").innerHTML = '';
        for (let i=0; i<numSims; i++) {
            let sampleProp = computeSampleProp(Ho, n);
            document.getElementById("output").innerHTML += sampleProp + ", ";
            if (Ha == ">" && sampleProp >= .6) { 
                j++;
            }
            else if (Ha == "<" && sampleProp <= .6) { 
                j++;
            }
            else alert("Please make sure to enter < or > for Ha");
        };   

        document.getElementById("analysis1").innerHTML = "The percentage of sample proportions greater than or equal to " + pHat + " is " + j/numSims + ".";
        document.getElementById("analysis2").innerHTML = "The percentage " + j/numSims + " is called a P-value. It is the approximate likelihood that a sample proportion wil be  " + Ha + pHat + ", assuming that the population proportion is " + Ho + ".";
    };
