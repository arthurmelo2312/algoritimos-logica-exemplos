// Importação da biblioteca
const prompt = require('prompt-sync')()

// Vetor para armazenar os produtos
let produtos = []

// Coleta dos produtos
for (let i = 0; i < 5; i++) {
    produtos[i] = prompt(`Digite o nome do ${i + 1}º produto: `)
}

// Exibindo os produtos cadastrados
console.log('')
console.log('== Lista de Compras ==')

for (let i = 0; i < 5; i++) {
    console.log(`${i + 1} - ${produtos[i]}`)
}