// Implemente um programa que recebe uma nota de 0 a 10 e classifica como 
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")();
let inputNota

do {
    inputNota = Number(prompt("Digite uma nota de 0 a 10: "))

    if (isNaN(inputNota) || inputNota > 10 || inputNota < 0) {
       console.log("Por favor, digite um número válido.")
       continue
    }

    if (inputNota < 5) {
     console.log("Reprovado")
    } else if (inputNota >= 5 && inputNota <7) {
     console.log("Recuperação")
    } else {
        console.log("Aprovado")
    }

} while(true)