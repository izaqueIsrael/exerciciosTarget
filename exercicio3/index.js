const fs = require('fs');

// Lendo dados.json
const dadosJson = JSON.parse(fs.readFileSync('dados.json', 'utf-8'));

// Calculando menor e maior valor de faturamento
let menorValor = Number.MAX_SAFE_INTEGER;
let maiorValor = Number.MIN_SAFE_INTEGER;
let somaTotal = 0
const dadosJsonAux = [];

dadosJson.forEach((item) => {
  if (item.valor != 0)
    dadosJsonAux.push(item)
})

dadosJsonAux.forEach((item) => {
  if (item.valor < menorValor)
    menorValor = item.valor;
  if (item.valor > maiorValor)
    maiorValor = item.valor;
});

// Calculando média mensal de faturamento
dadosJsonAux.forEach((item) => somaTotal += item.valor)
const media = somaTotal / dadosJsonAux.length

// Calculando número de dias em que o valor de faturamento diário foi superior à média mensal
let diasAcimaDaMedia = 0;
dadosJsonAux.forEach((item) => {
  if (item.valor > media)
    diasAcimaDaMedia += 1;
})

console.log(`Menor valor de faturamento em um dia do mês: ${menorValor}`);
console.log(`Maior valor de faturamento em um dia do mês: ${maiorValor}`);
console.log(`Número de dias em que o valor de faturamento diário foi superior à média mensal: ${diasAcimaDaMedia}`);
