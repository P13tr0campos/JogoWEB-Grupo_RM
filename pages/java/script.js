let titulo = document.querySelector('.oTituloh1')
let instrucoes = document.querySelector('#instrucoes')
let placarFinal = document.querySelector('#placarFinal')
let aviso = document.querySelector('#aviso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao: 0,
    pergunta: "Pergunta",
    alternativaA: "Alternativa A",
    alternativaB: "Alternativa B",
    alternativaC: "Alternativa C",
    correta: "0",
}

const q1 = {
    numQuestao: 1,
    pergunta: "O sistema genital masculino é formado por órgãos que atuam na reprodução. É nesse sistema que os gametas masculinos, chamados de espermatozoides, são produzidos. Entre as alternativas a seguir, marque aquela que indica o nome correto do local onde são produzidos os espermatozoides.",
    alternativaA: "a) Escroto.",
    alternativaB: "b) Epidídimo.",
    alternativaC: "c) Pênis.",
    alternativaD: "d) Testículo.",
    correta: "d) Testículo.",
}

const q2 = {
    numQuestao: 2,
    pergunta: "No sistema genital masculino não são produzidos apenas os espermatozoides. O hormônio testosterona, responsável pelos caracteres sexuais, também é ali sintetizado. Marque a alternativa que indica corretamente o local onde ocorre essa síntese.",
    alternativaA: "a) A testosterona é produzida pelas ilhotas de Langerhans localizadas no interior do escroto.",
    alternativaB: "b) A testosterona é produzida pelas células da próstata.",
    alternativaC: "c) A testosterona é produzida pelas células intersticiais localizadas no interior dos testículos.",
    alternativaD: "d) A testosterona é produzida nos túbulos seminíferos encontrados no interior dos testículos.",
    correta: "c) A testosterona é produzida pelas células intersticiais localizadas no interior dos testículos.",
}

const q3 = {
    numQuestao: 3,
    pergunta: "Sabemos que os espermatozoides não são eliminados sozinhos no momento da ejaculação. Junto a eles são liberados líquidos nutritivos produzidos pelas:",
    alternativaA: "a) glândulas bulbouretrais, próstata e testículo.",
    alternativaB: "b) glândulas seminais, próstata e glândulas bulbouretrais.",
    alternativaC: "c) glândulas seminais, testículo e glândulas bulbouretrais.",
    alternativaD: "d) glândulas bulbouretrais, testículo e bexiga.",
    correta: "b) glândulas seminais, próstata e glândulas bulbouretrais.",
}

const q4 = {
    numQuestao: 4,
    pergunta: "Entre os órgãos que compõem o sistema reprodutor masculino, marque a alternativa que indica corretamente o nome da estrutura comum ao sistema urinário e genital:",
    alternativaA: "a) Ducto deferente.",
    alternativaB: "b) Ureter.",
    alternativaC: "c) Bexiga.",
    alternativaD: "d) Uretra.",
    correta: "d) Uretra.",
}

const q5 = {
    numQuestao: 5,
    pergunta: "O pênis é o órgão copulatório do homem e apresenta uma anatomia que favorece sua ereção. Sobre a anatomia do pênis, marque a alternativa correta:",
    alternativaA: "a) O pênis apresenta dois corpos cavernosos e um corpo esponjoso.",
    alternativaB: "b) O pênis é preenchido totalmente por um tecido erétil que forma uma coluna única.",
    alternativaC: "c) O corpo cavernoso do pênis forma a glande.",
    alternativaD: "d) A uretra está localizada no interior dos dois corpos cavernosos.",
    correta: "a) O pênis apresenta dois corpos cavernosos e um corpo esponjoso.",
}

const q6 = {
    numQuestao: 6,
    pergunta: "Na porção terminal do pênis, observa-se uma pele que se projeta sobre a glande. Essa pele recebe a denominação de:",
    alternativaA: "a) Prepúcio.",
    alternativaB: "b) Fimose.",
    alternativaC: "c) Corpo cavernoso.",
    alternativaD: "d) Epidídimo.",
    correta: "a) Prepúcio.",
}

const q7 = {
    numQuestao: 7,
    pergunta: "Algumas situações estão relacionadas com o aumento do número de casos de câncer de pênis. Analise as alternativas a seguir e marque aquela que não apresenta relação com esse tipo de câncer.",
    alternativaA: "a) Acúmulo de secreção entre a glande e o prepúcio.",
    alternativaB: "b) Má higiene íntima.",
    alternativaC: "c) Realização de circuncisão.",
    alternativaD: "d) Estreitamento do prepúcio.",
    correta: "c) Realização de circuncisão.",
}

const q8 = {
    numQuestao: 8,
    pergunta: "Sobre o processo de ereção do pênis, marque a alternativa incorreta:",
    alternativaA: "a)  A ereção acontece após a estimulação sexual.",
    alternativaB: "b) Na ereção, há estimulação parassimpática, que desencadeia a dilatação das artérias do pênis.",
    alternativaC: "c) No momento da ereção, as veias são comprimidas.",
    alternativaD: "d) No estado flácido, observa-se pouco fluxo de sangue no pênis.",
    correta: "d) No estado flácido, observa-se pouco fluxo de sangue no pênis.",
}

const q9 = {
    numQuestao: 9,
    pergunta: "A circuncisão é um procedimento cirúrgico que se caracteriza:",
    alternativaA: "a) pelo corte dos ductos deferentes.",
    alternativaB: "b) pela retirada da glande.",
    alternativaC: "c) pelo aumento da fimose.",
    alternativaD: "d) pela retirada do prepúcio.",
    correta: "d) pela retirada do prepúcio.",
}

const q10 = {
    numQuestao: 10,
    pergunta: "O Caminho dos espermatozóides produzidos nos testículos é:",
    alternativaA: "a) próstata, vesícula seminal e uretra.",
    alternativaB: "b) canal deferente, túbulos seminíferos e uretra.",
    alternativaC: "c) túbulos seminíferos, epidídimo, canal deferente e uretra.",
    alternativaD: "d) epidídimo, túbulos seminíferos, uretra e canal deferente.",
    correta: "c) túbulos seminíferos, epidídimo, canal deferente e uretra.",
}

const q11 = {
    numQuestao: 11,
    pergunta: "Trata-se de um líquido constituinte do esperma que apresenta aspecto leitoso e é alcalino, contribui para neutralizar a acidez das secreções vaginais, além de promover um aumento da motilidade dos espermatozóides. Esse líquido é produzido:",
    alternativaA: "a) pelo epidídimo.",
    alternativaB: "b) pelo testículo.",
    alternativaC: "c) pela próstata.",
    alternativaD: "d) pelas glândulas bulbouretrais.",
    correta: "c) pela próstata.",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length) - 1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')
// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao + 'A')
    b.setAttribute('value', nQuestao + 'B')
    c.setAttribute('value', nQuestao + 'C')
    d.setAttribute('value', nQuestao + 'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    let certa = questoes[numeroDaQuestao].correta
    
    if (respostaEscolhida == certa) {
        pontos += 10 // pontos = pontos + 10
        alert("Muito bem, acertou!");
        
    } else {
        alert("Que pena, você errou!");
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function () {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao + 1

        if (proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 500)//tempo em milesimos de segundos para reiniciar o jogo
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')
    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function () {
        pontos = 0 // zerar placar
        window.location = 'segundaPag.html';
    }, 10000)
}

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
    var duracao = 60 * 4; //A duracao do quiz é de 4 minutos
    var display = document.querySelector(".cronometro"); //Elemento para exibir o timer

    iniciarTimer(duracao, display); //Incia a função
    
    if (timer == 0)
    {
        fimDoJogo();
    }
}