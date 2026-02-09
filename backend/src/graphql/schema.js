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
    comment: String
  }

  type Query {
    characters(
      name: String
      species: String
      status: String
      gender: String
      origin: String
      order: String
      is_favorite: Boolean
    ): [Character!]!
  }

  type Mutation {
    toggleFavorite(id: ID!): Character
    addComment(id: ID!, comment: String!): Character
  }
`;
