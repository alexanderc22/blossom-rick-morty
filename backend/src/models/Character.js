import { DataTypes } from 'sequelize';
import sequelize from '../database/sequelize.js';

const Character = sequelize.define('Character', {
  name: DataTypes.STRING,
  status: DataTypes.STRING,
  species: DataTypes.STRING,
  gender: DataTypes.STRING,
  origin: DataTypes.STRING,
  image: DataTypes.STRING,
  is_favorite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export default Character;
