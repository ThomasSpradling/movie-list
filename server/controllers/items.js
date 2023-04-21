const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.items.getAll()
      .then(items => {
        if (!items || items.length === 0) {
          res.status(200).json([]);
        } else {
          res.status(200).json(items);
        }
      })
      .catch(err => {
        res.sendStatus(400);
        console.error(err.stack);
      });
  },
  /*
    Expect res.body to have shape { title, year, runtime, status, vote, watched }
  */
  post: (req, res) => {
    models.items.create(req.body)
      .then(item => res.status(201).json(item))
      .catch(err => {
        res.sendStatus(400);
        console.error(err.stack);
      });
  },

  patch: (req, res) => {
    const { id } = req.params;
    models.items.update(id, req.body)
      .then(item => res.sendStatus(204))
      .catch(err => {
        res.sendStatus(400);
        console.error(err.stack);
      })
  }
};