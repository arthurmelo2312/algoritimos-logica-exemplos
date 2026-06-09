// Importação da biblioteca
const prompt = require('prompt-sync')()

// Vetores para armazenar os nomes e preços dos pratos
let pratos = []
let precos = []

// Cadastro dos pratos
for (let i = 0; i < 4; i++) {
    pratos[i] = prompt(`Digite o nome do ${i + 1}º prato: `)
    precos[i] = parseFloat(prompt(`Digite o preço do ${i + 1}º prato: R$ `))
}

// Exibindo o cardápio
console.log('')
console.log('--- Cardápio ---')

for (let i = 0; i < 4; i++) {
    console.log(`${i + 1}. ${pratos[i]} - R$ ${precos[i]}`)
}

// Escolha do usuário
let opcao = parseInt(prompt('\nEscolha um prato pelo número: '))

// Validação da opção e exibição do prato escolhido
if (opcao >= 1 && opcao <= 4) {
    console.log('')
    console.log(`Você escolheu: ${pratos[opcao - 1]}`)
    console.log(`Preço: R$ ${precos[opcao - 1]}`)
} else {
    console.log('')
    console.log('Opção inválida!')
}