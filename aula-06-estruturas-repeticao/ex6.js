// Importando o módulo
const prompt = require('prompt-sync')();

// Solicita um número ao usuário
let numero = Number(prompt('Digite um número: '));

// Declarando variáveis
let contador;
let resultado;

// Estrutura de repetição para
for (contador = 1; contador <= 10; contador++) {

    // Calcula o resultado da multiplicação
    resultado = numero * contador;

    // Exibe a tabuada
    console.log(numero + ' x ' + contador + ' = ' + resultado);
}