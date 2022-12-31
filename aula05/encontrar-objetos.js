const clientes = require("./clientes.json");

const encontrarCliente = (lista, chave, valor) => {
  return lista.find((item) => {
    return item[chave].includes(valor);
  });
};

const encontrado = encontrarCliente(clientes, "nome", "Kirby");
console.log(encontrado);
