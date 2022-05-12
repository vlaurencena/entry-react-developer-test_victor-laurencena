import { gql } from "apollo-boost";

const getCategoriesQuery = gql`
    {
        categories {
        name
        }
    } 
  
`;

const getProductsByCategoryQuery = gql`
query GetProductsByCategory($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
        category
        gallery
        name
        prices{
          currency {
            label
            symbol
          }
          amount
        }
        inStock
      }
    }
  }
  
`;

const getProductByIdQuery = gql`
  query GetProductById($id: String!){
    product(id: $id)  {
      id
      brand
      name
      description
      inStock
      gallery
      attributes {
        id
        name
        type
        items {
          id
          displayValue
        value
        }
      }
      prices{
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
`;

const getCurrenciesQuery = gql`
    {
      currencies {
        label
        symbol
      }
    }
`;

export {
  getCategoriesQuery,
  getProductsByCategoryQuery,
  getCurrenciesQuery,
  getProductByIdQuery
};
