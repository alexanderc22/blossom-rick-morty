// import redisClient from '../cache/redis.js'; // Desactivado temporalmente
import { Op } from 'sequelize';
import Character from '../models/Character.js';

export const resolvers = {
  Query: {
    characters: async (_, args) => {
      // ======================
      // Redis cache temporarily disabled
      // ======================
      // const cacheKey = `characters:${JSON.stringify(args)}`;
      // const cached = await redisClient.get(cacheKey);
      // if (cached) {
      //   console.log('⚡ Cache hit');
      //   return JSON.parse(cached);
      // }

      const where = {};
      const order = [];
      const { name, species, is_favorite } = args;

      if (name) {
        where.name = { [Op.like]: `%${name}%` };
      }

      if (species) {
        where.species = species;
      }

      if (is_favorite !== null && is_favorite !== undefined) {
        where.is_favorite = is_favorite;
      }
      if (args.status) where.status = args.status;
      if (args.gender) where.gender = args.gender;
      if (args.origin) where.origin = args.origin;

      if (args.order === 'AZ') order.push(['name', 'ASC']);
      if (args.order === 'ZA') order.push(['name', 'DESC']);

      const results = await Character.findAll({ where, order });

      // ======================
      // Redis cache temporarily disabled
      // ======================
      // await redisClient.setEx(cacheKey, 3600, JSON.stringify(results));

      return results;
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
