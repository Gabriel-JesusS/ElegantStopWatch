const miliSSegundos = document.querySelector('#ms');
const iniciarCronometro = document.querySelector('.btMain');
const pararCronometro = document.querySelector(".btStop");
const reiniciarCronometro = document.querySelector('.btreset');
const segundos = document.querySelector("#segundo");
const minutos = document.querySelector('#minuto');
const horas = document.querySelector('#hora');
const btTampa = document.querySelector('#btTampa');
const parteSuperiorCr = document.querySelector('.tampa');

// variaveis do cronometro
let miliSsegundos = 0;
let Segundos = 1;
let minutosCr = 1;

// variaveis para adicao do zero no cronometro
let adicionarZero1 = "0";
let adicionarZero2 = "0";
let adicionarZero3 = "0";

//variaveis dos botoes
var botao_Iniciar_Contagem = 0;
var botao_Parar_Contagem = 0;
var botaoReiniciar = 0
var botao_Abrir_Fechar_tampa = 0;

function cronometro() {
    pararCronometro.addEventListener('click', () => {
        botao_Parar_Contagem++; if (botao_Parar_Contagem == 1) clearInterval(tempo), botao_Iniciar_Contagem = 0, botao_Parar_Contagem = 0;
    });

    reiniciarCronometro.addEventListener('click', () => {
        botaoReiniciar++; if (botaoReiniciar == 1) miliSsegundos = 0, botaoReiniciar = 0, Segundos = 1, minutosCr = 1;
        miliSSegundos.innerHTML = "0" + 0, segundos.innerHTML = "0" + 0, minutos.innerHTML = "0" + 0;
    });

    const tempo = setInterval(() => {

        if (Segundos > 60) Segundos = 0, segundos.innerHTML = adicionarZero1 + Segundos;
        if (Segundos == 0) minutos.innerHTML = adicionarZero3 + minutosCr++, Segundos = 1, adicionarZero1 = "0";
        if (miliSsegundos >= 99) segundos.innerHTML = adicionarZero2 + Segundos++, miliSsegundos = 0, adicionarZero2 = "0";
        miliSSegundos.innerHTML = miliSsegundos++;
        //condicao para que quando os segundos que passarem de 59s ele reseta os segundos para 00 
        if (minutosCr > 9) adicionarZero1 = 0;
        if (Segundos > 9) adicionarZero2 = 0;
        if (Segundos > 9) adicionarZero3 = 0;
        if (Segundos > 9) adicionarZero3 = "0";
        if (Segundos == 1) adicionarZero2 = "0";
    }, 10);
}

iniciarCronometro.addEventListener('click', () => {
    botao_Iniciar_Contagem++; if (botao_Iniciar_Contagem == 1) cronometro();
    botao_Parar_Contagem = 0;
});

btTampa.addEventListener('click', () => {
    botao_Abrir_Fechar_tampa++;
    if (botao_Abrir_Fechar_tampa == 2) parteSuperiorCr
        .style.top = "-180px", botao_Abrir_Fechar_tampa = 0;
    if (botao_Abrir_Fechar_tampa == 1) parteSuperiorCr
        .style.top = "0px";
});

