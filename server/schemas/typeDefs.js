const { gql } = require("apollo-server-express");

// type Category {
//   _id: ID
//   name: String
//   price: Float
// }

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Product {
    _id: ID
    size: String
    customText: String
    color: String
    quantity: Int
    style: String
    category: String
    price: Int
  }

  type Charity {
    _id: ID
    goalHitDate: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Auth {
    token: ID
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    products: [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    orders: [Order]
    donations: [Charity]
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addProduct(
      customText: String!
      size: String!
      quantity: Int!
      color: String!
      style: String!
      category: String!
      price: Int!
    ): Product
    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    addDonation(goalHitDate: String): Charity
  }
`;

module.exports = typeDefs;
