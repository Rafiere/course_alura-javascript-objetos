const cliente = {
  nome: "João",
  idade: 24,
  email: "joao@firma.com",
  telefones: ["11223344", "123451234"],
};

cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "AP 934",
  },
  {
    rua: "R. Testando",
    numero: 1234,
    apartamento: false,
    complemento: "Casa 01",
  },
];

/* O método "Object.keys()" retornará um array com todas as chaves do objeto que já foram inicializadas. */
const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter um endereço cadastrado.");
}
