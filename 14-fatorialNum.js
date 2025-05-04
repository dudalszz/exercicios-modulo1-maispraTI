// Crie um programa que calcula o fatorial de um número fornecido pelo usuário 
// utilizando um loop for ou while.  

const prompt = require("prompt-sync")();

do {
    const numero = Number(prompt("Digite um número inteiro e positivo para calcular o fatorial: "))
    if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        console.log("Por favor, digite um número válido.")
    } else {
        let fatorial = 1
        for (let i = 1; i <= numero; i++) {
        fatorial *= i
        }
        console.log(`O fatorial de ${numero} é: ${fatorial}`)
    }
    const repetir = prompt("Deseja calcular outro número fatorial? (S/N): ").toUpperCase()
    if (repetir !== 'S') break 
} while(true)