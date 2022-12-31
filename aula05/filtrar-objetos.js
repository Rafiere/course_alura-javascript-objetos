const clientes = require("./clientes.json");

const filtrarApartamentosSemComplemento = (clientes) => {
  return clientes.filter((cliente) => {
    /* Estamos buscando o cliente que possui o booleano "apartamento" como "true" e que não possuem a propriedade "complemento". */
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento")
    );
  });
};

const filtrados = filtrarApartamentosSemComplemento(clientes);

console.log(filtrados);
