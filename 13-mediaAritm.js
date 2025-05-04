// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer 
// a média aritmética desses números.  

const prompt = require("prompt-sync")();

let soma = 0
let quantidade = 0
let numero

do {
    numero = Number(prompt("Digite um número decimal, ou '0', para sair: "))
    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.")
    } else if (numero !== 0 ) {
        soma += numero
        quantidade++
    }
} while (numero !== 0)

if (quantidade > 0) {
    const media = soma/quantidade
    console.log(`A média aritmética dos números digitados é de ${media.toFixed(2)}`)
} else {
    console.log("Nenhum número válido foi registrado.")
}