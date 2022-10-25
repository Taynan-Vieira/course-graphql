const { gql, ApolloServer } = require("apollo-server");

const produtos = [
  {
    id: 1,
    nome: "Notebook",
    valor: 12000.0,
  },
  {
    id: 2,
    nome: "TV",
    valor: 6000.0,
  },
];

const usuarios = [
  {
    id: 1,
    nome: "Paulo",
    salario: 10000.0,
    ativo: true,
    idade: 29,
  },
  {
    id: 2,
    nome: "João",
    salario: 15000.0,
    ativo: false,
    idade: 35,
  },
];

const typeDefs = gql`
  type Usuario {
    idade: Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
  }

  type Produto {
    id: ID
    nome: String
    valor: Float
  }

  type Query {
    usuarios: [Usuario]
    produtos: [Produto]
  }
`;

const resolvers = {
  Query: {
    usuarios() {
      return usuarios;
    },
    produtos() {
      return produtos;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen();
