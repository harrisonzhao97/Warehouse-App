const postgresql = require('pg');

exports.pool = new postgresql.Pool({
  user: '',
  database: 'warehouses',
  password: '',
  host: '127.0.0.1',
  port: 5432
});