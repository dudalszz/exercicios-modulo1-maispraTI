// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se 
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs 
// compradas, calcule e escreva o valor total da compra. 

const prompt = require("prompt-sync")()
let quantidadeDeMacas
let total
let repetir

do {
    quantidadeDeMacas = parseInt(prompt("Quantas maçãs você deseja comprar?: "))
    if (isNaN(quantidadeDeMacas) || quantidadeDeMacas <= 0) {
        console.log("Por favor, insira uma quantidade válida (maior que 0).");
    } else {
            if (quantidadeDeMacas < 12) {
            total = quantidadeDeMacas * 0.3
            console.log(`O total de ${quantidadeDeMacas} maçãs fora da promoção fica no total de R$${total.toFixed(2)}`)
        } else {
            total = quantidadeDeMacas * 0.25
            console.log(`O total de ${quantidadeDeMacas} maçãs na promoção fica no total de R$${total.toFixed(2)}`)
        }
    }
    repetir =  prompt("Deseja fazer outra compra? (S/N): ").toUpperCase();
} while (repetir === "S");
