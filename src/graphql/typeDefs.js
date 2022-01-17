const { gql } = require('apollo-server-express')

module.exports = gql`

  type Author {
    id: ID!
    email: String
    firstName: String!
    lastName: String!
    age: Int
    numBooksPublished: Int
    addressId: ID
    books: [String]
    subBookById(id: ID!): Book!
  }

  type Book {
    id: ID!
    title: String!
    numPages: Int
    authorId: ID!
    bestseller: Boolean
    subAuthorById(id: ID!): Author!
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String
    numBooksPublished: Int
    addressId: ID
  }

  type Address {
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  input AddAuthorInput {
    email: String
    firstName: String!
    lastName: String!
    age: Int
    numBooksPublished: Int
    addressId: ID
    books: [String]
  }

  input AddPublisherInput {
    company: String
  }

  input AddBookInput{
    title: String!
    numPages: Int
    authorId: ID!
    bestseller: Boolean
  }

  input AddAddressInput{
    street: String!
    city: String!
    state: String!
    zip: String!
}

  type Query {
    allAuthors: [Author!]!
    authorById(id: ID!): Author!
    allBooks: [Book!]!
    bookById(id: ID!): Book!
    welcome: String!
  }

  type Mutation {
    addAuthor(input: AddAuthorInput!): Author!
    addPublisher(input: AddPublisherInput!): Publisher!
    addBook(input: AddBookInput!): Book!
    addAddress(input: AddAddressInput!): Address!
  }
`
