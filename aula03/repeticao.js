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

/* O laço "for-in" permite que obtenhamos as chaves de todos os atributos do objeto "cliente". */
for (let chave in cliente) {
  console.log(cliente[chave]); //Estamos obtendo os valores de todos os atributos do objeto "cliente".
}
