// Suprogramuokite skriptą, kurioje parašius tam tikrą sekundžių kiekį, rodo  24 valandų, minučių, sekundžių formatu.

// Papildomai:

// *Sekundčių kiekis paimamas iš input HTML žymės laukelio.

// *Išveskite konvertuotą sekunžių informacija į div.

let sec, mm, hh;    //kintamieji sekundės, minutės, valandos
let nn;              //įvestas sekundžių kiekis



function laikrodis() {

nn = document.getElementById("sek").value;         //įvedame sekundžių kiekį

console.log("Įvestas skaičius " + nn);

if (nn <= 0 || nn > 86400) {                                        //patikrinam ar neviršytas 24val sekundžių skaičius, ir ar neįvestas neigiamas skaičius
    console.log("Įveskite skaičių nuo 0 iki 86400");
    document.getElementById("ats").innerHTML = "Įveskite skaičių nuo 0 iki 86400";
} else {
    mm = Math.trunc(nn / 60);
    hh = Math.trunc(mm / 60);
    mm = mm - hh*60;
    ss = nn - (hh * 3600 + mm * 60);
    console.log(hh + ' val :' + mm + ' min :' + ss + ' sec');
    document.getElementById("ats").innerHTML = hh + ' val :' + mm + ' min : ' + ss + ' sec';
}
}