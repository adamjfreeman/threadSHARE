const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }
  


  type Auth {
    token: ID
    user: User
  }

  
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
