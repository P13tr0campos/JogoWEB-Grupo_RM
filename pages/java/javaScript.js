//JavaScript para guardar o nome do usuário e ir para a segunda página do site

// Seleciona o botão com o id "enviaBTN" no HTML
const botao = document.querySelector("#enviaBTN");

// Seleciona o formulário com o id "nomUser" no HTML
const formulario_NomeUser = document.querySelector("#nomUser");

// Seleciona o input com o id "nameUser" no HTML
const input = document.querySelector("#nameUser");

// Função que será chamada quando o formulário for submetido
const handleSubmit = (event) => {
    // Evita o comportamento padrão do formulário (enviar e recarregar a página)
    event.preventDefault();

    // Armazena o valor do input no localStorage com a chave 'nome_do_jogador'
    localStorage.setItem('nome_do_jogador', input.value);

    // Redireciona para a página 'segundaPag.html'
    window.location = 'segundaPag.html';
}

// Adiciona um ouvinte de evento para a submissão do formulário, chamando a função handleSubmit
formulario_NomeUser.addEventListener('submit', handleSubmit);
