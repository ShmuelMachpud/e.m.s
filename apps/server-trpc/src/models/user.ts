import { DataTypes} from 'sequelize'
import {sequelize} from '../configs/connectDB'

export const User = sequelize.define('users', {
    id:{
        type:DataTypes.UUID,
        allowNull: false,
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
})
// export const createUser = async()=>{
//     const sara = User.build({
//         first_name: 'Sara',
//         last_name: 'Machpud',
//         email: 'Sm0529514802',
//         password: 'Sara2023',
//     });
//     console.log(sara instanceof User);
//     console.log(sara);
    
//     await sara.save()
//     console.log('Sara was saved to the database!');
// }
console.log('is:',(sequelize.models));
