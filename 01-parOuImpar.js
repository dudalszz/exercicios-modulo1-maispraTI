// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar 
// utilizando uma estrutura de controle if.  

const prompt = require("prompt-sync")();
let inputNumber

do {
     inputNumber = Number(prompt("Digite um número inteiro, ou '0 para sair: "))

     if (isNaN(inputNumber)) {
        console.log("Por favor, digite um número válido.")
        continue
     }

     if (inputNumber % 2 === 0) {
      console.log(`${inputNumber} é um número par!`)
     } else {
      console.log(`${inputNumber} é um número impar!`)
     }

} while(inputNumber !== 0)

