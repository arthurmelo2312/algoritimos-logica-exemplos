// Importação da biblioteca
const prompt = require('prompt-sync')()

// Vetor para armazenar os gols de cada time
let gols = []

// Coleta dos gols de cada time
for (let i = 0; i < 5; i++){
    gols[i] = parseInt(prompt(`Digite o nºde Gol's do ${i + 1}º time.`))
}

let acimaDe3 = 0
let ate3 = 0

//Lógica para percorrer o vetor e determinar quem fez mais de 3 Gol's
for (let i = 0; i <5; i++) {
    if(gols[i] > 3) {
        acimaDe3++
    } else {
        ate3++;
    }
}

//Exibindo os resultados
console.log('')
console.log('== Resultaods ==')
console.log('Times com mais de 3 Gols: ',acimaDe3)
console.log('Times com menos de 3 Gols: ',ate3)