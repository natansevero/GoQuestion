const express = require('express');
const router = express.Router();

const red = (req, res) => { res.render('index') }

router.get('/api', red);
router.get('/', red);

module.exports = router;
