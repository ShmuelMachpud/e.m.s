import {DataTypes} from 'sequelize'
import {sequelize} from '../configs/connctDB'

export const employee = sequelize.define('employees', {
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