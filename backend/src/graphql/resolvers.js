import Character from '../models/Character.js';

export const resolvers = {
  Query: {
    characters: async (_, args) => {
      const where = {};
      const order = [];

      if (args.name) where.name = args.name;
      if (args.species) where.species = args.species;
      if (args.status) where.status = args.status;
      if (args.gender) where.gender = args.gender;

      if (args.order === 'AZ') order.push(['name', 'ASC']);
      if (args.order === 'ZA') order.push(['name', 'DESC']);

      return await Character.findAll({ where, order });
    },
  },

  Mutation: {
    toggleFavorite: async (_, { id }) => {
      const character = await Character.findByPk(id);
      if (!character) throw new Error('Character not found');

      character.is_favorite = !character.is_favorite;
      await character.save();

      return character;
    },

    addComment: async (_, { id, comment }) => {
      const character = await Character.findByPk(id);
      if (!character) throw new Error('Character not found');

      character.comment = comment;
      await character.save();

      return character;
    },
  },
};
