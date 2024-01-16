import {DataTypes} from 'sequelize'
import {sequelize} from '../configs/connectDB'
import { v4 as uuidv4 } from 'uuid';


export const Employee = sequelize.define('employee', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        // autoIncrement: true,
        defaultValue: () => uuidv4()
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

},{
    timestamps: false
});



console.log('is true:',(Employee === sequelize.models.employee));


export const syncDatabase = async () => {
    await Employee.sync({});
    try {
      await Employee.sync();
      console.log('Database synchronized!');
    } catch (error) {
      console.error('Error synchronizing the database:', error);
      throw error; // Propagate the error to the caller
    }
  };

