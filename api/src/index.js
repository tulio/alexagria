const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Run the server on a port specified in our .env file or port 4004
const port = process.env.PORT || 4004;

let books = [
	{
		id: '1',
		title: 'This is book title', 
		author: 'John Doe'
	},
	{
		id: '2',
		title: 'This is another book title', 
		author: 'John Doe'
	},
	{
		id: '3',
		title: 'Oh hey look, another book title', 
		author: 'John Doe'
	}
]


// Construct a schema, using GraphQL schema language
const typeDefs = gql`
	type Book {
		id: ID!
		title: String!
		author: String!
	}
  type Query {
    hello: String!
    books: [Book!]!
    book(id: ID!): Book!
  }
  type Mutation {
    newBook(title: String!): Book
  }
`;

// Provide resolver functions for our schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!', 
    books: () => books, 
    book: (parent, args) => {
    	return books.find(book => book.id === args.id)
    }
  }, 
  Mutation: {
    newBook: (parent, args) => {
      let bookValue = {
        id: String(books.length + 1),
        title: args.title,
        author: 'John Doe'
      };
      books.push(bookValue);
      return bookValue;
    }
  }
};

const app = express();

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Apply the Apollo GraphQL middleware and set the path to /api
server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () =>
  console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  )
);