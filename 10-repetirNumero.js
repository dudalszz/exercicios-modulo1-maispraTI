// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require("prompt-sync")();

do {
    const numero = Number(prompt("Digite um número inteiro: "))
    if (isNaN(numero) || numero < 0) {
        console.log("Por favor, digite apenas números inteiros e positivos")
    } else {
        for (let i = 0; i < 10; i++ ) {
            console.log(`${numero}`)
        }
    }
}while(true)