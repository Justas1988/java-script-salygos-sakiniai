"use strict"

document.getElementById("calc").addEventListener("click", function() {

let zingsniai = 0;
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

    // console.log(i);
    zingsniai++;

    
}   
}
console.log("Zingsniai: " + zingsniai);
} )



 