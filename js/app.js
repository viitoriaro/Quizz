//criamos uma variável para pegar o id resposta
const resultado = document.getElementById('resultado')

//criamos a função que verifica se uma
//resposta é correta
function pergunta(resposta,prox){
    if(resposta === "a"){
        resultado.innerHTML = "Resposta correta"
        resultado.style.color ="green"
        setTimeout(function(){
            window.location.href=prox;
        },1000)
    } else {
        resultado.innerHTML = "Resposta incorreta"
        resultado.style.color ="red"
    }
}




