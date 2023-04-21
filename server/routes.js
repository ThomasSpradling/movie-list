const controller = require('./controllers');
const router = require('express').Router();

router.get('/items', controller.items.get);
router.post('/items', controller.items.post);
router.patch('/items/:id', controller.items.patch);

module.exports = router;