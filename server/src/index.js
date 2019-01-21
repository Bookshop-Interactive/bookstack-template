import { ApolloServer } from 'apollo-server';
import typeDefs from './schema/Schema';
import resolvers from './resolvers/BookResolvers';
import db from './database/db';
import Books from './database/books';

const options = {
  port: 3333,
  endpoint: '/books',
  playground: '/playground',
};

const context = {
  db,
  Books,
};

const server = new ApolloServer({ typeDefs, resolvers, context });

server.listen(options).then(({ url }) => {
  console.log(`Launching away 🚀 on ${url}`);
});
