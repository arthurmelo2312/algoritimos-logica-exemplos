// Importação da biblioteca
const prompt = require('prompt-sync')()

// Vetor para armazenar os preços
let precos = []

// Coleta dos preços
for (let i = 0; i < 6; i++) {
    precos[i] = parseFloat(prompt(`Digite o preço do ${i + 1}º produto: `))
}

// Inicializando o maior e o menor preço
let maiorPreco = precos[0]
let menorPreco = precos[0]

// Percorrendo o vetor para encontrar o maior e o menor preço
for (let i = 1; i < 6; i++) {
    if (precos[i] > maiorPreco) {
        maiorPreco = precos[i]
    }

    if (precos[i] < menorPreco) {
        menorPreco = precos[i]
    }
}

// Exibindo os resultados
console.log('')
console.log('== Resultados ==')
console.log('Maior preço encontrado: R$', maiorPreco)
console.log('Menor preço encontrado: R$', menorPreco)