const miliSSegundos = document.querySelector('#MS');
const iniciarCronometro = document.querySelector('.BTMain');
const PararCronometro = document.querySelector(".BTStop");
const ReiniciarCronometro = document.querySelector('.BTreset');
const segundos = document.querySelector("#segundo");
const minutos = document.querySelector('#minuto');
const horas = document.querySelector('#hora');
const BtTampa = document.querySelector('#BTtampa');
const ParteSuperiorCr = document.querySelector('.tampa');

// variaveis do cronometro
let miliSsegundos = 0;
let Segundos = 1;
let Minutos = 1;

// variaveis para adicao do zero no cronometro
let adicionarZero1 = "0";
let adicionarZero2 = "0";
let adicionarZero3 = "0";

//variaveis dos botoes
var click = 0;
var clickS = 0;
var clickR = 0
var clickB = 0;

function Cronometro() {
    PararCronometro.addEventListener('click', () => {
        clickS++; if (clickS == 1) clearInterval(tempo), click = 0, clickS = 0;
    });

    ReiniciarCronometro.addEventListener('click', () => {
        clickR++; if (clickR == 1) miliSsegundos = 0, clickR = 0, Segundos = 1, Minutos = 1;
        miliSSegundos.innerHTML = "0" + 0, segundos.innerHTML = "0" + 0, minutos.innerHTML = "0" + 0;
    });

    const tempo = setInterval(() => {

        if (Segundos > 60) Segundos = 0, segundos.innerHTML = adicionarZero1 + Segundos;
        if (Segundos == 0) minutos.innerHTML = adicionarZero3 + Minutos++, Segundos = 1, adicionarZero1 = "0";
        if (miliSsegundos >= 99) segundos.innerHTML = adicionarZero2 + Segundos++, miliSsegundos = 0, adicionarZero2 = "0";
        miliSSegundos.innerHTML = miliSsegundos++;
        //condicao para que quando os segundos passarem de 59s ele reseta os segundos para 00 
        if (Minutos > 9) adicionarZero1 = 0;
        if (Segundos > 9) adicionarZero2 = 0;
        if (Segundos > 9) adicionarZero3 = 0;
        if (Segundos > 9) adicionarZero3 = "0";
        if (Segundos == 1) adicionarZero2 = "0";
    }, 10);
}

iniciarCronometro.addEventListener('click', () => {
    click++; if (click == 1) Cronometro();
    clickS = 0;
});

BtTampa.addEventListener('click', () => {
    clickB++;
    if (clickB == 2) ParteSuperiorCr.style.top = "-180px", clickB = 0;
    if (clickB == 1) ParteSuperiorCr.style.top = "0px";
});

