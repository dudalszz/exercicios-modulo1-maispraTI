// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos 
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: 
// Isósceles, escaleno ou eqüilátero. 

const prompt = require("prompt-sync")();

function valorTriangulo() {
    const A = parseFloat(prompt("Digite o valor do lado A: "))
    const B = parseFloat(prompt("Digite o valor do lado B: "))
    const C = parseFloat(prompt("Digite o valor do lado C: "))

if (isNaN(A) || isNaN(B) ||isNaN(C)) {
    console.log("Por favor, insira apenas valores numéricos.")
    return
}
    const formaTriangulo = (A + B > C && A + C > B && B + C > A) 

    if (!formaTriangulo) {
        console.log("Os valores não formam um triangulo")
            return
    }
        
    // Determinar o tipo de triângulo

        if (A === B && B === C) {
            console.log("Triângulo equilátero")
        }  else if (A === B || B === C || A === C) {
            console.log("Triângulo isósceles")
        } else {
            console.log("Triângulo escaleno")
        } 
    }

let repetir
do {
    valorTriangulo()
    repetir = prompt("Deseja verificar outro triangulo? Digite (S/N): ").toUpperCase()
} while(repetir === 'S')