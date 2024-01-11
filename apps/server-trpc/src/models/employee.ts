import {DataTypes} from 'sequelize'
import {sequelize} from '../configs/connectDB'
// import { v4 as uuidv4 } from 'uuid';


export const Employee = sequelize.define('employees', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        // defaultValue: () => uuidv4()
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

},{
    createdAt:false,
    updatedAt: false
});

console.log(Employee === sequelize.models.Employee);


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

