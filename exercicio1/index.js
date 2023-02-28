const indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
}
document.querySelector('.resposta').textContent = `Essa é a respota: ${soma}`;