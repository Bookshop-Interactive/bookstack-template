import { gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String!
    author: String!
    genre: String!
  }

  type Query {
    books: [Book]
    book(name: String): Book
  }

  type Mutation {
    writeBook(title: String!, author: String!, genre: String!): Book
  }
`;

export default typeDefs;
