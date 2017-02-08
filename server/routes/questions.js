const express = require('express');
const router = express.Router();
const questions = require('./../controllers/questions');

router.post('/create', questions.create);
router.get('/', questions.retrieve);
router.get('/:codigo', questions.getOne);

module.exports = router;
