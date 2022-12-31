const clientes = require("./clientes.json");

const ordenar = (lista, propriedade) => {
  return clientes.sort((a, b) => {
    if (a[propriedade] > b[propriedade]) {
      return 1;
    } else if (a[propriedade] < b[propriedade]) {
      return -1;
    } else {
      return 0;
    }
  });
};

const listaOrdenada = ordenar(clientes, "nome");

console.log(listaOrdenada);
