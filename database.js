const Pool = require("pg").Pool;
const dotenv = require('dotenv').config()

const pool = new Pool({
    user: 'postgres',
    password: 'K@^ee2001',
    host: 'localhost',
    port: 5432,
    database: 'RMV'
});

module.exports = pool;