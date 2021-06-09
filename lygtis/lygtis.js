// Sukurkite  skriptą, kuris suranda kvadratinės lygties sprendimą.

// Papildomai:

// *Skaičiai paimami iš input HTML žymės laukelių.

// *Išveskite konvertuotą sekunžių informacija į div.

let a, b, c, d, x1, x2;

function diskriminantas() {

a = document.getElementById("rA").value;
b = document.getElementById("rB").value;
c = document.getElementById("rC").value;

console.log("Reikšmė A: " + a + " Reikšmė B: " + b + " Reikšmė C: " + c);


d = (b**2) - (4*a*c);

console.log("Diskriminantas: " + d);

if (d<0) {

    //nėra sprendinių
    console.log("Sprendinių nėra, nes Diskriminantas neigiamas");
    document.getElementById("ats").innerHTML = "Sprendinių nėra, nes Diskriminantas neigiamas";
    
} else { if (d=0) {

    x1 = -b / (2*a);
    console.log("Sprendinys 1: " + x1);
    document.getElementById("ats").innerHTML = "Sprendinys 1: " + x1;

} else {
//su reikšmėmis 2, -3, 1 atsakymas turėtu būti X1=1, X2=0.5, bet gaunasi 0.75. kodėl?
    x1 = (-b + Math.sqrt(d)) / (2 * a); 
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log("Sprendinys 1: " + x1 + " Sprendinys 2: " + x2);
    document.getElementById("ats").innerHTML = "Sprendinys 1: " + x1 + " Sprendinys 2: " + x2;

}
    
}
                        }