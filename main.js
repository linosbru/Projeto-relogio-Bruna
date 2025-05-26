const botoes = document.querySelectorAll(".botoes");
console.log(botoes)
Form(let i=0; i <botoes.length; i++){
    botoes[i].onclick = function(){

for(let j=0;<botoes.length;j++){
    botoes[j].classList.remove("ativo");
}

        botoes[i].classList.add("ativo");
    }
}