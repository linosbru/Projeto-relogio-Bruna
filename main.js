const botoes = document.querySelectorAll(".botoes");
const textos = document.querySelectorAll(".aba-conteudo");
textos[i].classList.add("ativo");
textos[j].classList.remove("ativo");
console.log(botoes)

for(let i=0; i< botoes.length; i++){
    botoes[i].onclick = function(){
        
        for (let j=0; j<botoes.length; j++){
            botoes[j].remove.add("ativo");
        }
        botoes[i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-04-05T00:00:00");
const tempoObjetivo2 = new Date("2025-08-05T00:00:00");
const tempoObjetivo3 = new Date("2025-08-30T00:00:00");
const tempoObjetivo4 = new Date("2025-10-01T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

function atualizaCronometro(){
    for (let i= 0; i <contadores.length; i++){
    document.getElementById("dias"+i).textContent=
    calculaTempo(tempos[i])[0];
    document.getElementById("horas"+i).textContent=
    calculaTempo(tempos[i])[1];
    document.getElementById("min"+i).textContent=
    calculaTempo(tempos[i])[2];
    document.getElementById("seg"+i).textContent=
    calculaTempo(tempos[i])[3];
console.log("seg+i")
  }
}
fuction comecaCronometro(){
atualizaCronometro();
setInterval(atualizaCronometro, 1000);
}
comecaCronometro();

function calculaTempo(tempoObjetivo){
let tempoAtual = new Date();
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor (minutos / 60);
let dias = Math.floor (horas / 24);

segundos %= 60;
minutos %= 60;
horas %= 24;
}

if(tempoFinal>0){
return [dias, horas, minutos, segundos];
} else{
    return [0,0,0,0];
}
contadores [0].textContent = tempoObjetivo1 - tempoAtual;
contadores[0].textContent = "contagem regressiva";
