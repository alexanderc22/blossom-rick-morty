import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Character {
    id: ID!
    name: String!
    status: String
    species: String
    gender: String
    origin: String
    image: String
    is_favorite: Boolean
  }

  type Query {
    characters: [Character!]!
  }
`;
