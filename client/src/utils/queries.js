import gql from "graphql-tag";

export const QUERY_PRODUCT = gql`
  query product($_id: ID!) {
    product(_id: $_id) {
      _id
      customText
      style
      color
      size
      quantity
      price
      category
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  query products {
    products {
      _id
      customText
      style
      color
      size
      quantity
    }
  }
`;

export const QUERY_ALL_ORDERS = gql`
  query orders {
    orders {
      _id
      purchaseDate
      products {
        _id
        price
        category
        quantity
      }
    }
  }
`;

export const QUERY_ORDER = gql`
  query order($_id: ID!) {
    order(_id: $_id) {
      _id
      purchaseDate
      products {
        _id
        customText
        category
        price
      }
    }
  }
`;

export const QUERY_ALL_DONATIONS = gql`
  query donations {
    donations {
      _id
      goalHitDate
    }
  }
`;

// export const QUERY_ALL_PRODUCTS - don't need all products right now

// export const QUERY_CATEGORIES - don't need right now, need more saved for product type

export const QUERY_USER = gql`
  query user {
    user {
      firstName
      lastName
      email
      orders {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
