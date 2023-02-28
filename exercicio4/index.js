const receita = [
  { estado: 'SP', receita: 67836.43 },
  { estado: 'RJ', receita: 36678.66 },
  { estado: 'MG', receita: 29229.88 },
  { estado: 'ES', receita: 29229.88 },
  { estado: 'outros', receita: 19849.53 }
];

let valorTotal = 0;
receita.forEach((item) => valorTotal += item.receita);

const percentual = (receita) => receita / valorTotal;
const mostraPercentual = (estado, porcentagem) => console.log(`O estado com sigla ${estado} tem ${porcentagem.toFixed(2)}% na receita da empresa`);

receita.forEach((item) => {
  mostraPercentual(item.estado, percentual(item.receita) * 100);
});
