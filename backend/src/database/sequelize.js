import { Sequelize } from 'sequelize';
import fs from 'fs';

const env = process.env.NODE_ENV || 'development';

const config = JSON.parse(
  fs.readFileSync(new URL('../../config/config.json', import.meta.url))
);

const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: false,
  }
);

export default sequelize;
