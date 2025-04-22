//this file will tell that will be structure of your data

const { gql } = require("graphql-tag");

//String
//Int
//Float
//Booleam
//ID -> an unique identifier - like _id
//if we use ! at the end of type it means it is non nullable type whichc bascially means it is required
//the queries are similar to find byid

const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    category: String!
    price: Float!
    inStock: Boolean
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(
      title: String!
      category: String!
      price: Float!
      inStock: Boolean!
    ): Product
    deleteProduct(id: ID!): Boolean
    updateProduct(
      id: ID!
      title: String
      category: String
      price: Float
      inStock: Boolean
    ): Product
  }
`;

module.exports = typeDefs;
