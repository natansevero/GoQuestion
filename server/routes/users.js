const express = require('express');
const router = express.Router();
const users = require('./../controllers/users');

router.get('/', users.retrieve);
router.post('/', users.create);

module.exports = router;
