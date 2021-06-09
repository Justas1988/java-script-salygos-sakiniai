// Suraskite triženklio skaičiaus visų skaitmenų:

// *Sumą

// *Vidurkį

// *Sandaugą.

// Prieš tai atpažinti, ar tai yra triženklis skaičius, jei skaičius dviženklis ar n-ženklis, veiksmų nevykdyti                            

// Papildomai:

// *Skaičius paimamas iš input HTML žymės laukelio.

// *Išveskite informacija į div.

let sum, sand, vid, number;
let sk1, sk2, sk3;

function trizenklis() {

number = document.getElementById("numb").value;
const lenght = Math.ceil(Math.log10(number));
console.log("Skaiciaus ilgis: " + lenght);
console.log("Įvestas skaičius: " + number);

if (lenght !=3) {
    console.log("Įveskite trijų skaitmenų, sveikąjį skaičių");
    document.getElementById("ats").innerHTML = "Įveskite trijų skaitmenų, sveikąjį skaičių";    
} else {
    sk1 = Math.trunc(number / 100);
    sk2 = Math.trunc((number - sk1*100) / 10);
    sk3 = number - (sk1*100 + sk2*10);
    console.log("sk1= " + sk1 + " sk2= " + sk2 + " sk3= " + sk3);
    sum = sk1 + sk2 + sk3;
    sand = sk1*sk2*sk3;
    vid = sum/3;
    document.getElementById("atsakymai").innerHTML = "Įvestas skaičius: " + number + " Skaitmenų suma: " + sum + " Sandauga: " + sand + " Vidurkis: " + vid;
    
}

}