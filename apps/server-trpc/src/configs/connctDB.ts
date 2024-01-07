import {Sequelize, DataTypes} from 'sequelize'

import React from 'react'




const sequelize = new Sequelize('postgres://xztowbjg:L0aTWeyzd9EHkZ96URQtlsQOi03kSn5e@tyke.db.elephantsql.com/xztowbjg');

export const connctDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

      return sequelize
    }



export const employees = sequelize.define('employees', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})




