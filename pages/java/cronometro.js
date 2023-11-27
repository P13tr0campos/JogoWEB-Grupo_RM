function iniciarTimer(duracao, display) {

    var timer = duracao, minutos, segundos;

    setInterval(function () {

        //O valor dos minutos e segundos é calculado
        minutos = parseInt(timer / 60, 10);
        segundos = parseInt(timer % 60, 10);

        //Exibiçao de numeros que menores que 10 s ou 10 min aparecem com 0 na frente
        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        //Exibe em tela o timer
        display.textContent = minutos + ":" + segundos;

        //Produz o efeito de decrementação do timer
        if (--timer < 0) {
            timer = duracao;
        }
    }, 1000);
}

window.onload = function () {
    var duracao = 60 * 0.5; //A duracao de cada pergunta e 25 segundos
    var display = document.querySelector("#timer"); //Elemento para exibir o timer

    iniciarTimer(duracao, display); //Incia a função
}

export {iniciarTimer};