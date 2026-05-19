const prompt = require ("prompt-sync")()

let pergunta = prompt("O produto está esgotado? (s ou n): ")
    if (pergunta ==="n") {
       console.log("Produto disponível para venda")
    } else {
        console.log("Por favor, reabasteça o estoque")
    }
