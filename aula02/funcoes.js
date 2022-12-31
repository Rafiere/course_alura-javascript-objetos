const cliente = {
  nome: "João",
  idade: 24,
  email: "joao@firma.com",
  telefones: ["11223344", "123451234"],
  saldo: 200,

  possuiSaldoSuficiente: (valor) => {
    return this.saldo > valor;
  },
};

console.log(
  `O cliente possui saldo suficiente: ${cliente.possuiSaldoSuficiente(100)}`
);
