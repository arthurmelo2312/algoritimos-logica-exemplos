const senhaCorreta = "1234";
let senha;

do {
    senha = prompt("Digite a senha:");
} while (senha !== senhaCorreta);

console.log("Acesso permitido!");