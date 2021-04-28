// mitchell put in mutations
import { GraphQLString } from "graphql";
import gql from "graphql-tag";

// what am I going to put in, what am I spitting out

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// double check after playground
export const ADD_PRODUCT = gql`
  mutation addProduct(
    $style: String!
    $color: String!
    $customText: String!
    $size: String!
    $quantity: Number!
  ) {
    addProduct(
      style: $style
      color: $color
      customText: $customText
      size: $size
      quantity: $quantity
    ) {
      product {
        _id
      }
    }
  }
`;

// add order - FINISH CODE
export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      _id
      purchaseDate
      products {
        _id
        price
      }
    }
  }
`;

export const ADD_DONATION = gql`
  mutation addDonation($goalHitDate: String!) {
    addDonation(goalHitDate: $goalHitDate) {
      _id
      goalHitDate
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
