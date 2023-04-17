const {pool} = require('../db.js');

exports.addWarehouse = (req, res) => {
  const queryString = `INSERT INTO warehouses (name, zones) VALUES ($1, $2)`;
  const values = [req.body.name, req.body.zones];

  pool
    .query(queryString, values)
    .then(() => {res.send('successfully added warehouse')})
    .catch(err => res.send(err))
}