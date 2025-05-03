// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e 
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) 
// utilizando if-else.  

const prompt = require("prompt-sync")();
do {
let inputPeso = parseFloat(prompt("Digite o seu peso: "))
let inputAltura = parseFloat(prompt("Digite a sua altura: "))

if (isNaN(inputPeso)) {
    console.log('Peso inválido.');
} else if (isNaN(inputAltura)) {
    console.log('Altura inválida.');
} else {
    let imc = inputPeso / (inputAltura * inputAltura) 
    console.log(("Seu IMC é: " + imc.toFixed(2)))

if (imc < 18.5) {
    console.log("Classificação: Baixo peso")
} else if (imc > 18.5 && imc < 24.9) {
    console.log("Classificação: Peso normal")
} else if (imc >= 25 && imc < 29.9 ) {
    console.log("Classificação: Sobrepeso")
} else {
    console.log("Classificação: Obesidade")
}
}
} while (true)