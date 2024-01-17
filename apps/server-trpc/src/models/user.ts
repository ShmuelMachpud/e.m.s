import { DataTypes} from 'sequelize'
import {sequelize} from '../configs/connectDB'
import { v4 as uuidv4 } from 'uuid';

export const User = sequelize.define('user', {
    id:{
        type:DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    timestamps: false
});

console.log('is true:',(User === sequelize.models.user));
