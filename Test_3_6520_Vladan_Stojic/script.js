// 1. Zadatak

let sportista1 = {
    imePrezime: "Klass Jan Huntelaar",
    visina: 185,
    timovi: ["Herenven", "Ajax", "Real Madrid", "A.C. Milan"]
}
let sportista2 = {
    imePrezime: "Kaka'",
    visina: 187,
    timovi: ["Sao Paolo", "A.C. Milan", "Real Madrid"]
}
let sportista3 = {
    imePrezime: "David Villa",
    visina: 175,
    timovi: ["Valencia", "Barcelona", "Chicago"]
}
let sportista4 = {
    imePrezime: "Totti",
    visina: 178,
    timovi: ["Roma"]
}
let sportisti = [sportista1, sportista2, sportista3, sportista4]

console.log(`1. Zadatak`);
console.log(sportisti);

// 2. Zadatak

// Napisati funkciju prosečnaVisina kojoj se prosleđuje niz sportista, a ona vraća
// prosečnu visinu sportista. Pozvati funkciju i rezultat ispisati u konzoli.

console.log(`2. Zadatak`);

let prosecnaVisina = arr =>{
    let suma = 0;
    let srVisina = 0;
    arr.forEach(el =>{
        suma += el.visina;
    });
    srVisina = suma / arr.length;
    return srVisina;
}

console.log(prosecnaVisina(sportisti));

// 3. Zadatak
// Napisati funkciju igraliZaTim kojoj se prosleđuje niz sportista i naziv tima, a funkcija
// prebrojava koliko puta se prosleđeni tim pojavljuje među timovima za koje su
// sportisti igrali i vraća taj broj. Pozvati funkciju i rezultat ispisati u konzoli.

console.log(`3. Zadatak`);

let igraliZaTim = (arr, tim) =>{
    let brojac = 0;
    arr.forEach(el =>{
        el.timovi.forEach(timovi =>{
            if(timovi == tim){
                brojac++;
            }
        });
    });
    return brojac;
}
console.log(igraliZaTim(sportisti, "A.C. Milan"));

// 4. Zadatak
// Napisati funkciju najmanjeTransfera kojoj se prosleđuje niz sportista, a funkcija
// vraća ime i prezime onog sportiste koji je imao najmanji broj transfera (najmanje
// puta je promenio tim). Pozvati funkciju i rezultat ispisati u konzoli. Ukoliko postoji
// više takvih sportista, vratiti ime i prezime bilo kog od takvih sportista.

console.log(`4.Zadatak`);

let najmanjeTransfera = arr => {
    let min = arr[0].timovi.length;
    arr.forEach(el =>{
        if(min > el.timovi.length){
            min = el.timovi.length;
        }
    });
    arr.forEach(i =>{
        if(min == i.timovi.length){
            console.log(`${i.imePrezime}`);
        }
    });
    return min;
}
console.log(najmanjeTransfera(sportisti));

// 5. Zadatak ????
// prosecnaVisina

// imamo 5 igraca
// 3 protiv 2,,,   5 / 2 = 2.5   Math.ceil = 3 na 2

let visiTimPodela = arr =>{
    let prviTim = [];
    let drugiTim = [];

    for(let i = 0; i < Math.ceil(arr.length/2); i++){
        prviTim.push(arr[i]);
    }
    for(let j = Math.ceil(arr.length/2); j< arr.length; j++){
        drugiTim.push(arr[j]);
    }

    if(prosecnaVisina(prviTim) > prosecnaVisina(drugiTim)){
        document.body.innerHTML += `<p style="font-size: 35px">Visi je PRVI tim</p>`
    }
    else if(prosecnaVisina(prviTim) < prosecnaVisina(drugiTim)){
        document.body.innerHTML += `<p style="font-size: 35px">Visi je DRUGI tim</p>`
    }
    else{
        document.body.innerHTML += `<p style="font-size: 35px">Oba
        tima su u proseku iste visine</p>`
    }
}

visiTimPodela(sportisti)

//6. Zadatak
console.log(`6. Zadatak`);

let trenerVidi = arr =>{
    let najvisiIgrac = arr[0].visina;
    let brojac = 1;
    arr.forEach(el =>{
        if(el.visina > najvisiIgrac){
            el.visina = najvisiIgrac;
            brojac++;
        }
    });
    return brojac
}
console.log(trenerVidi(sportisti));
