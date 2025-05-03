    // Crie um programa que classifica a idade de uma pessoa em categorias (criança, 
    // adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de 
    // controle if-else.

const prompt = require("prompt-sync")();
let inputAge

do {
    inputAge = Number(prompt("Digite sua idade, ou '0' para sair: "))
    
    if (isNaN(inputAge)) {
        console.log("Por favor, digite uma idade válida.")
        continue
     }

     if (inputAge < 0) {
        console.log("Sua idade não pode ser negativa")
        continue
    }

    if (inputAge === 0) {
        break
    }

    if (inputAge >= 60) {
        console.log("Idoso")
    } else if (inputAge >= 18) {
        console.log("Adulto")
    } else if (inputAge > 12 && inputAge < 18) {
        console.log("Adolescente")
    } else {
        console.log("Criança")
    }


} while(inputAge !== 0) 