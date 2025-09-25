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

function iniciar() {
    // Gerar um novo número secreto (entre 1 e 100)
    // math.random() gera um número entre 0 (inclusive) e 1 (exclusive)
    // multiplicamos por 100 para ter entre 0 e 99.99..
    // adicionamos 1 para ter entre 1 e 100.99...
    // math.floor() arredonda para o menor inteiro, então teremos entre 1 e 99
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log('numero Secreto (apenas para teste):', numeroSecreto); // adjuda no debug!
}