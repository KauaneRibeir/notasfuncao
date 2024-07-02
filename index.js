const prompt = require("prompt-sync")({ sigint: true });
let notas = []
let quant = +prompt (" Digite a quantidade de notas ")
for (let i = 0; i< quant; i++) {
let num = +prompt (" Digite as notas ")
notas.push(num)
}
function media(notas) {
    let soma = 0;
  
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i]; 
    }
  
    return soma / quant
}
console.log(notas, media(notas))