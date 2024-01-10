import {DataTypes} from 'sequelize'
import {sequelize} from '../configs/connectDB'

export const Employee = sequelize.define('employees', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // createdAt: {
    //     type: DataTypes.DATE,
    //     allowNull: true, // Allow null values
    // },
    // updatedAt: {
    //     type: DataTypes.DATE,
    //     allowNull: true, // Allow null values
    // },

},{
    timestamps: false, // Disable timestamps
});

export const syncDatabase = async () => {
    await Employee.sync({ alter: true });
    try {
      await Employee.sync();
      console.log('Database synchronized!');
    } catch (error) {
      console.error('Error synchronizing the database:', error);
      throw error; // Propagate the error to the caller
    }
  };

