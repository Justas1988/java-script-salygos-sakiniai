"use strict"

document.getElementById("calc").addEventListener("click", function() {
let today = new Date();
let functionStart = today.getTime();
let startTime = today.getHours() + "hh:" + today.getMinutes() + "min:" + today.getSeconds() + "sec:" + today.getMilliseconds() + "ms";
let kiekis = parseInt(document.getElementById("squares").value);
console.log("Įvesta trikampių: " + kiekis);

if (kiekis <= 0) { document.getElementsByClassName("container")[0].innerHTML = "Įvesk daugiau už nulį";
    
} else {
for (let i=0; i<kiekis; i++) {
    
    let divElementas = document.createElement("div"); // div sukurtas, bet neatvaizduojamas
    divElementas.classList.add("div-dydis");
    divElementas.innerText = i + 1;                  //pElementas

    if( (i+1) % 2 == 0 ) {
        divElementas.classList.add("zalias");
    }

    document.querySelector(".container").append(divElementas);
    
}   
}
let endday = new Date();
let functionFinish = endday.getTime();
let finishTime = endday.getHours() + "hh:" + endday.getMinutes() + "min:" + endday.getSeconds() + "sec:" + endday.getMilliseconds() + "ms";
let laikas = functionFinish - functionStart;

console.log("Pradzios laikas: " + startTime);
console.log("Pabaigos laikas: " + finishTime);
document.getElementById("pradzia").innerHTML = "Script started at: " + startTime;
document.getElementById("pabaiga").innerHTML = "Script finished at: " + finishTime;
document.getElementById("rezultatas").innerHTML = "Computer generated " + kiekis + " squares in " + laikas + " miliseconds!!!";
console.log("Computer generated " + kiekis + " squares in " + laikas + " miliseconds");
} )



 