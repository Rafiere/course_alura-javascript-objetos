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

const ligarParaCliente = (telefoneComercial, telefoneResidencial) => {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
};

/* Cada elemento do array será um parâmetro que será passado para a função "ligarParaCliente()". */
ligarParaCliente(...cliente.telefones);

const encomenda = {
  destinatario: cliente.nome,
  endereco: cliente.enderecos[0],
};

/* Teremos um objeto com o atributo "destinatario" e os campos que estavam dentro do endereço de forma "flat", ou seja, sem criarmos um objeto dentro do outro. */
const encomendaFlat = {
  destinatario: cliente.nome,
  ...cliente.enderecos[0],
};
