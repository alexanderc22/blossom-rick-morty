import Character from '../models/Character.js';

export const resolvers = {
  Query: {
    characters: async () => {
      return await Character.findAll();
    }
  }
};
