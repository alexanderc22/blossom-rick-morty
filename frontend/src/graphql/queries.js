import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters(
    $name: String
    $species: String
    $is_favorite: Boolean
  ) {
    characters(
      name: $name
      species: $species
      is_favorite: $is_favorite
    ) {
      id
      name
      species
      status
      gender
      origin
      image
      is_favorite
    }
  }
`;
