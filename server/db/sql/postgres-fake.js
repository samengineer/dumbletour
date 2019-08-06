const { Pool, Client } = require('pg');

const a = 'postgres://nkqugefk:QUBlxEQ-K3CAbPUffOfmhVLu6gWhmXfe@raja.db.elephantsql.com:5432/nkqugefk';
const pool = new Pool({connectionString: a});


pool.query('CREATE TABLE IF NOT EXISTS users (_id SERIAL PRIMARY KEY, firstName VARCHAR, lastName VARCHAR, email VARCHAR, password VARCHAR)', (err, res) => {
    console.log(err, res)
  });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
};