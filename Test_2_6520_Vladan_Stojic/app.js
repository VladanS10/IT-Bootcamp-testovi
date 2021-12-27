// 1. Zadatak

let vreme = new Date();
let sati = vreme.getHours();
let minuti = vreme.getMinutes();
let trenutnoMinuta = sati * 60 + minuti;
// console.log(trenutnoMinuta);

let ostalo;

let pocetakCvecare = 9;
let krajCvecare = 17;
let pocetakUSatima = 9 * 60;
let krajUMinutima = 17 * 60;

if(krajUMinutima > trenutnoMinuta){
    ostalo = krajUMinutima - trenutnoMinuta;
}
if(trenutnoMinuta < pocetakUSatima){
    document.body.innerHTML = `<p style="color: red; font-size:35px">Radno vreme jos uvek nije pocelo</p>`
}
if(trenutnoMinuta > krajUMinutima){
    document.body.innerHTML = `<p style="color: red; font-size:35px">Radno vreme je zavrseno</p>`
}
// console.log(ostalo);

let preostaloMinuta = ostalo % 60;
let preostaloSata = Math.trunc(ostalo / 60);

// console.log(preostaloMinuta);
// console.log(preostaloSata);

console.log(`Preostalo je jos ${preostaloSata}h i ${preostaloMinuta}min do kraja radnog vremena cvecare`);


// 2. Zadatak

let trenutnoGrama = 1700;
let postarina = 5;
let prvi = 1000;
let drugi = 2000;
let popust = 5;
let popustDva = 10;
let popustVaziPreko = 2000;
let procenat;
let procenatDva;
let bezPopusta = trenutnoGrama * postarina;
let saPopustom;
let saPopustomDva;

if(trenutnoGrama >= prvi && trenutnoGrama <= drugi){
    procenat = bezPopusta * popust / 100 ;
    saPopustom = bezPopusta - procenat;
    console.log(`Cena bez popusta je ${bezPopusta} dinara`);
    console.log(`Cena sa popustom je ${saPopustom} dinara`);
}

if(trenutnoGrama > popustVaziPreko){
        procenatDva = bezPopusta * popustDva / 100;
        saPopustomDva = bezPopusta - procenatDva
        console.log(`Cena bez popustom preko 2kg je ${bezPopusta} dinara`);
        console.log(`Cena sa popustom preko 2kg je ${saPopustomDva} dinara`);
    }

    // Zadatak 3
    let cvece = 7;
    let kupci = 6;
    let o= cvece % kupci
    if( cvece % kupci == 0){
        console.log(`Cvecara ne mora da dokupi cvece i svaki kupac dobija ${cvece / kupci}`);
    }
    else if(cvece % kupci != 0){
        console.log(`Cvecara mora da dokupi ${kupci - o} cveta`);
    }
    // console.log(o);


    
// Zadatak 4

let n = 7;
let m = 35;
let suma = 0;
let bb = 0;
for(i = n; i <= m; i++){
    if(i % 7 == 0 && i % 2 == 1){
        suma += i;
        bb++;
    }
}
console.log(`Suma brojeva od ${n} do ${m} je ${suma}`);
console.log(`Broj brojeva od ${n} do ${m} je ${bb}`);
console.log(`Proizvod ${suma} i ${bb} je ${suma * bb}`);

// Zadatak 5

n = 3;
m = 33;
bb = 0;
suma = 0;
for(i = n; i <=m; i++){
    if(i % 3 == 0 && i % 2 == 1){
        suma += i;
    }
    if(i % 10 == 3){
        bb++
    }
}
console.log(suma);
console.log(bb);
let razlika = suma - bb;
console.log(`Razlika je ${razlika}`);