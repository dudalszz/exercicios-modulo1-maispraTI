// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 
//  utilizando um loop for. 

const prompt = require("prompt-sync")();

do {
    const numero = Number(prompt(`Digite um número inteiro para ver a tabuada:`))

    if (isNaN(numero) || numero < 0) {
        console.log('Por favor, digite um número inteiro e positivo.');
    } else {
        console.log(`Tabuada do${numero}: `)
        for (let i = 1; i <= 10; i++ ) {
            console.log(`${numero} x ${i} = ${numero * i}`)
        }
    }
    let repetir
    repetir = prompt("\nDeseja ver a tabuada de outro número? (S/N): ").toUpperCase()
    if (repetir !== 'S') break
} while (true)