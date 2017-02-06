const express = require('express');
const router = express.Router();
const users = require('./../controllers/users');

router.post('/create', users.create);
router.get('/', users.retrieve);

module.exports = router;
