const express = require('express');
const router = express.Router();
const questions = require('./../controllers/questions');

router.post('/create', questions.create);
router.get('/', questions.retrieve);
router.get('/:codigo', questions.getOne);
router.get('/check/votes', questions.votes)

module.exports = router;
