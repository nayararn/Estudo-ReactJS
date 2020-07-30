export function toCurrency(v) {
  const [, decimal] = v.toFixed(2).split(".");
  // console.log('v:', v, '|', 'decimal:', decimal);
  const x = v.toLocaleString("pt-BR");
  const y = x.split(",");
  // console.log(x.split(','));
  return `R$ ${y[0]},${decimal}`;
}
