const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar DateTime

  type Book {
    id: ID!
    title: String!
    author: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
    books: [Book!]!
  }

  type Query {
    books: [Book!]!
    book(id: ID): Book!
  }

  type Mutation {
    newBook(title: String!): Book
    updateBook(id: ID!, title: String!): Book!
    deleteBook(id: ID!): Boolean!
    signUp(username: String!, email: String!, password: String!): String!
    signIn(username: String, email: String, password: String!): String!
  }
`;
