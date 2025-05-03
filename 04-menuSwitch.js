// Crie um menu interativo no console que oferece ao usuário a escolha de três opções. 
// Utilize switch-case para implementar a lógica de cada opção selecionada.  

const prompt = require("prompt-sync")();

let inputOpcao

do {
    inputOpcao = Number(prompt("Escolha um número de 1 a 3: "))
    switch (inputOpcao) {
        case 1:
        console.log("Bem vindo!")
        break
        case 2:
            console.log("Data atual: " + new Date().toLocaleString())
        break
        case 3:
            console.log("Obrigada por utilizar o sistema. Encerrando por aqui...")
        break
        default:
            console.log("Opção inválida. Tente novamente por gentileza")
    }
} while (inputOpcao !== 3)