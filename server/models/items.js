const db = require('../db');
const Promise = require('bluebird');

module.exports = {
  getAll: () => {
    const p = db.query('SELECT * FROM items ORDER BY items.id', [])
      .then(res => res)
      .catch(err => {
        console.error('GET ALL', err.stack);
      });
    return p;
  },
  create: (params) => {
    return db.query('INSERT INTO items (title, year, runtime, status, vote, poster, watched) VALUE (?, ?, ?, ?, ?, ?, ?)', Object.values(params));
  },
  // updates the item's `property` with id `id` to the value `value`.
  update: (id, updates) => {
    return db.query(`UPDATE items SET ${updates.property} = ? WHERE id = ?`, [updates.value, id]);
  }
};