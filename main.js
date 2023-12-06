var entradaSenha = document.getElementById('entradaSenha');
var medidorPoder = document.getElementById('medidorPoder');
var requisitoComprimento = document.getElementById('requisitoComprimento');
var requisitoMinuscula = document.getElementById('requisitoMinuscula');
var requisitoMaiscula = document.getElementById('requisitoMaiscula');
var requisitoNumero = document.getElementById('requisitoNumero');
var requisitoSimbolo = document.getElementById('requisitoSimbolo');
var textoPoder = document.getElementById('textoPoder');
var mostrarSenha = document.getElementById('mostrarSenha');

entradaSenha.addEventListener('input', function () {
    var senha = entradaSenha.value;
    var forcaSenha = verificaForcaSenha(senha);
    var cor = forcaSenha < 50 ? 'red' : forcaSenha < 80 ? 'yellow' : 'green';
    
    medidorPoder.style.width = forcaSenha + '%';
    medidorPoder.style.backgroundColor = cor;
    textoPoder.textContent = 'Força da Senha: ' + forcaSenha + '%';
    
    atualizarRequisitos(senha);
});

mostrarSenha.addEventListener('click', function () {
    entradaSenha.type = entradaSenha.type === 'password' ? 'text' : 'password';
});

function verificaForcaSenha(senha) {
    var comprimentoMinimo = 8;
    var possuiMinuscula = /[a-z]/.test(senha);
    var possuiMaiuscula = /[A-Z]/.test(senha);
    var possuiNumeros = /\d/.test(senha);
    var possuiSimbolo = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(senha);

    var forcaSenha = 0;

    if (senha.length >= comprimentoMinimo) {
        forcaSenha += 25;
    }

    if (possuiMinuscula) {
        forcaSenha += 25;
    }

    if (possuiMaiuscula) {
        forcaSenha += 25;
    }

    if (possuiNumeros) {
        forcaSenha += 25;
    }

    return Math.min(100, forcaSenha);
}

function atualizarRequisitos(senha) {
    var comprimentoMinimo = 8;
    var possuiMinuscula = /[a-z]/.test(senha);
    var possuiMaiuscula = /[A-Z]/.test(senha);
    var possuiNumeros = /\d/.test(senha);
    var possuiSimbolo = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(senha);

    requisitoComprimento.textContent = senha.length >= comprimentoMinimo
        ? '✓ Comprimento: mínimo 8 caracteres'
        : 'X Comprimento: mínimo 8 caracteres (A escuridão exige mais poder!)';

    requisitoMinuscula.textContent = possuiMinuscula
        ? '✓ Pelo menos uma letra minúscula'
        : 'X Pelo menos uma letra minúscula (A escuridão não reconhece fraquezas)';

    requisitoMaiscula.textContent = possuiMaiuscula
        ? '✓ Pelo menos uma letra maiúscula'
        : 'X Pelo menos uma letra maiúscula (A escuridão exige superioridade)';

    requisitoNumero.textContent = possuiNumeros
        ? '✓ Pelo menos um número'
        : 'X Pelo menos um número (A escuridão requer conhecimento proibido)';

    requisitoSimbolo.textContent = possuiSimbolo
        ? '✓ Pelo menos um símbolo obscuro'
        : 'X Pelo menos um símbolo obscuro (A escuridão demanda mistério e segredos)';
}