import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelizeInternalDB = new Sequelize(
  process.env.POSTGRE_DB || 'management_posts',
  process.env.POSTGRE_USER || 'postgres',
  process.env.POSTGRE_PASSWORD || 'akulahir0903',
  {
    host: process.env.POSTGRE_HOST || 'localhost',
    port: parseInt(process.env.POSTGRE_PORT as string) || 5432,
    dialect: 'postgres',
    logging: false,
  }
);

export default {
    sequelizeInternalDB,
};