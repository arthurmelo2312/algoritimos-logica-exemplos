const prompt = require ("prompt-sync")()

let idade = Number(prompt("Digite a idade do candidato:"));
let sabeJS = prompt("Sabe JavaScript? (s ou n)");
let sabePython = prompt("Sabe Python? (s ou n)");

if (idade >= 18 && (sabeJS == "s" || sabePython == "s")) {
    alert("Currículo aceito");
} else {
    alert("Currículo recusado");
}
