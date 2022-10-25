const {gql, ApolloServer} = require("apollo-server")

const resolvers = {
    Query: {
        hello(){
            return 'World';
        },
        hi(){
            return 'Oi';
        }
    }
}

const typeDefs = gql`
    type Query{
        hello: String
        hi: String
    }
`

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()