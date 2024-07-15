const pgp = require('pg-promise') ();
//SO we can have access to PG
require('dotenv').config();

const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD
};
//specifies what data base we're connecting to , a large connection object

const db = pgp(cn);

//passing our connection to postgress promise
module.exports = db;