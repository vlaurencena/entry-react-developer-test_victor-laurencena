import { gql } from 'apollo-boost';

const getCategories = gql`
    {
        categories {
        name
        }
    } 
  
`;

export { getCategories };
