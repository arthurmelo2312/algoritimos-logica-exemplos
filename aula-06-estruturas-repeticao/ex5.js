let nota = 0;
let soma = 0;
let quantidade = 0;

while (nota !== -1) {
    nota = Number(prompt("Digite a nota (-1 para encerrar):"));

    if (nota !== -1) {
        soma += nota;
        quantidade++;
    }
}

if (quantidade > 0) {
    const media = soma / quantidade;
    console.log("Média das notas: " + media);
} else {
    console.log("Nenhuma nota foi informada.");
}