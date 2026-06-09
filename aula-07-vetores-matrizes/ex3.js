// Importação da biblioteca
const prompt = require('prompt-sync')()

// Vetor para armazenar os números
let numeros = []

// Coleta dos números
for (let i = 0; i < 5; i++) {
    numeros[i] = parseInt(prompt(`Digite o ${i + 1}º número: `))
}

// Exibindo os números na ordem inversa
console.log('')
console.log('== Números na Ordem Inversa ==')

for (let i = 4; i >= 0; i--) {
    console.log(numeros[i])
}