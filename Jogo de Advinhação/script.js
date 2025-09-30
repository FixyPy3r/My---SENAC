let numeroSecreto; // O número que o jogador precisa adivinhar
let contadorDeChances = 1; // começa na primeira chance
const MAX_CHANCES = 10; // numero maximo de chances

const campoPalpite = document.querySelector('#campoPalpite');
const botaoEnviarPalpite = document.querySelector('#botaoEnviarPalpite');
const botaoReiniciar = document.querySelector('#botaoReiniciar');

const mensagemElement = document.querySelector('.mensagem');
const palpitesAnterioresElement = document.querySelector('.palpites-anteriores');
const dicaElement = document.querySelector('.dica')
const chancesRestantesElement = document.querySelector('#chancesRestantes')

let listaDePalpites = []; // array para guardar os palpites que o jogador já deu

function iniciarJogo() {
    // Gerar um novo número secreto (entre 1 e 100)
    // math.random() gera um número entre 0 (inclusive) e 1 (exclusive)
    // multiplicamos por 100 para ter entre 0 e 99.99..
    // adicionamos 1 para ter entre 1 e 100.99...
    // math.floor() arredonda para o menor inteiro, então teremos entre 1 e 99
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log('numero Secreto (apenas para teste):', numeroSecreto); // adjuda no debug!
    
    // Resetar o contador de chances
    contadorDeChances = 1;
    chancesRestantesElement.textContent = MAX_CHANCES; //mostra o total de chances

    //limpar as mensagens anteriores
    mensagemElement.textContent = '';
    palpitesAnterioresElement.textContent = '';
    dicaElement.textContent = '';
    listaDePalpites = [];



    mensagemElement.style.color = '#f0f0f0'; // cor padrão do texto
    dicaElement.style.color = '#ffeb3b'; // cor padrao da dica

    // reativar o campo de palpite e o botao de enviar
    campoPalpite.disabled = false;
    botaoEnviarPalpite.disabled = false;
    campoPalpite.value = ''; // limpa o campo de entrada
    campoPalpite.focus(); // coloca o cursor no campo para o usuário digitar

    // esconder botao de reiniciar
    botaoReiniciar.classList.add('hidden');
}
