const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Category {
    _id: ID
    name: String
    price: Float
  }

  type Product {
    _id: ID
    size: String
    customText: String
    color: String
    quantity: Int
    style: String
    category: Category
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

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    orders: [Order]
    donations: [Charity]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addCategory(name: String!, price: Int!): Category
    addProduct(
      customText: String!
      size: String!
      quantity: Int!
      color: String!
      style: String!
      category: String!
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
