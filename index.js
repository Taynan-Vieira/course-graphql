const {gql, ApolloServer} = require("apollo-server")

const typeDefs = gql`
    type Query{
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
        tecnologias: [String!]!
        
    }
`;

const resolvers = {
    Query: {
        idade(){
            return 13;
        },
        salario(){
            return 156843.56;
        },
        nome(){
            return "GraphQL";
        },
        ativo(){
            return true;
        },
        id(){
            return 12345678;
        },
        tecnologias(){
            return ['CSS', 'JavaScript', 'SQL'];
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()