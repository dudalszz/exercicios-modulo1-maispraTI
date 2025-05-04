// Escreva um programa que solicita ao usuário 5 números e calcula a soma total 
// utilizando um loop for. 

const prompt = require("prompt-sync")();

do {
    let soma = 0
    for (let i = 1; i <= 5; i++ ) {
     const numero = Number(prompt(`Digite o ${i} número:`))

     if (isNaN(numero) || numero < 0) {
        console.log('Por favor, digite um número inteiro e positivo.');
        i--
     } else {
        soma += numero
     }
    }
    console.log(`A soma total dos números é: ${soma}`);
}while(true)