import { ApolloServer } from 'apollo-server';
import typeDefs from './schema/Schema';
import resolvers from './resolvers/BookResolvers';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Launching away 🚀 on fart ${url}`);
});
