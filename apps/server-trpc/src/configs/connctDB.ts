import {Sequelize} from 'sequelize'

// export const sequelize = new Sequelize('postgres://xztowbjg:L0aTWeyzd9EHkZ96URQtlsQOi03kSn5e@tyke.db.elephantsql.com/xztowbjg');

export const sequelize = new Sequelize('E.M.S', 'postgres','206830895', {
    host:'localhost',
    dialect: 'postgres'
})

