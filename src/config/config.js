// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-86ba26075ee724b57af4d349fb33b1d3219d0c00.cgciqlwq1xrc.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: '}4HsQDb|JTy_y}.moT$[Yy,C8.p;}Nr^'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}