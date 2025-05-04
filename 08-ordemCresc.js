// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) 
// e escreve-los em ordem crescente.  
do {
    const prompt = require("prompt-sync")();
    let valor1 = Number(prompt("Insira o primeiro valor: "))
    let valor2 = Number(prompt("Insira o segundo valor (diferente do primeiro): "))

    if (valor1 === valor2) {
        console.log("Valores iguais. Tente novamente")
    } else {
        if (valor1 < valor2) {
            console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`)
        } else {
            console.log(`Valores em ordem crescente ${valor2}, ${valor1}`)
        }
    }
} while (true)