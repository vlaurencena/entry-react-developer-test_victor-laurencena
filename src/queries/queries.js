import { gql } from 'apollo-boost';

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
const getCurrenciesQuery = gql`
    {
      currencies {
        label
        symbol
      }
    }
`;

export { getCategoriesQuery, getProductsByCategoryQuery, getCurrenciesQuery };