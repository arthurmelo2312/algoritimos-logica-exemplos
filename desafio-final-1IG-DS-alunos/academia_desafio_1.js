// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// DESAFIO FINAL 1 — Dados de 3 Membros (Academia)
// Conceitos: vetores, for, do...while, condicionais encadeadas,
//            operadores lógicos

console.log("=== Cadastro de Membros — Academia ===");
console.log("");

// Vetores para armazenar os dados dos 3 membros
const nomes  = [];
const idades = []; // em anos

// ___________________________________________________________________________
// ETAPA 1 — Entrada de dados com vetor + for
for (let i = 0; i < 3; i++) {

    console.log(`--- Membro ${i + 1} ---`);
    nomes[i]  = prompt(`Nome: `);
    idades[i] = parseInt(prompt(`Idade (anos): `));
    console.log("");

}
// Etapa 2
let resposta;
do {
    resposta = prompt("Deseja Visualizar a ficha de membros?) (sim/não)")
    if(resposta !== "sim" && resposta !== "não" && resposta !== "nao"){
        console.log("Resposta inválida! Tente novamente");
        console.log("");
    }
}while(resposta !== "sim" && resposta !== "não" && resposta !== "nao")

    if (resposta === "sim") {

    console.log("");
    console.log("==========================================");
    console.log("       FICHA DOS MEMBROS — ACADEMIA      ");
    console.log("==========================================");
    console.log("");

    for (let i = 0; i < 3; i++) {

        // Condicional encadeada para classificar por faixa etária
        let categoria;

        if (idades[i] < 18) {
            categoria = "Juvenil";
        } else if (idades[i] < 60) {
            categoria = "Adulto";
        } else {
            categoria = "Melhor Idade";
        }

        console.log(`--- Membro ${i + 1} ---`);
        console.log(`Nome:       ${nomes[i]}`);
        console.log(`Idade:      ${idades[i]} anos`);
        console.log(`Categoria:  ${categoria}`);
        console.log("");

    }

} else {

    console.log("");
    console.log("Programa finalizado com sucesso!");

}


