import {Sequelize, DataTypes} from 'sequelize'

// export const sequelize = new Sequelize('postgres://xztowbjg:L0aTWeyzd9EHkZ96URQtlsQOi03kSn5e@tyke.db.elephantsql.com/xztowbjg');

export const sequelize = new Sequelize('E.M.S', 'postgres','206830895', {
    host:'localhost',
    dialect: 'postgres',
})


export const connectDatabase = async () => {
    try {
      await sequelize.authenticate();
      console.log('Database connected!');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      throw error; // Propagate the error to the caller
    }
  };