const dados = require("./cliente.json");

console.log(typeof dados);

/* Esse método transformará um JSON em uma string. */
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);

/* Estamos convertendo uma string em um objeto. */
const objetoDados = JSON.parse(clienteEmString);

console.log(objetoDados);
