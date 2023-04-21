const mysql = require('mysql2');
const Promise = require('bluebird');

const connection = mysql.createConnection({
  user: 'root',
  database: 'list'
});

connection.connect();

module.exports.query = (sql, values) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (err, rows) => {
      if (err) {
        console.error(err.stack);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

module.exports.connection = connection;