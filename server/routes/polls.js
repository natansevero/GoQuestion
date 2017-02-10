const express = require('express');
const router = express.Router();
const polls = require('./../controllers/polls');

router.post('/response/:id_question', polls.create);
router.get('/:id_question', polls.getOne);

module.exports = router;
