const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar DateTime

  type Book {
    id: ID!
    title: String!
    author: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    books: [Book!]!
    book(id: ID): Book!
  }

  type Mutation {
    newBook(title: String!): Book
    updateBook(id: ID!, title: String!): Book!
    deleteBook(id: ID!): Boolean!
  }
`;
