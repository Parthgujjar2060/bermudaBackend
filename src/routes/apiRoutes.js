const express = require('express');
const { createData, getData } = require('../controllers/apiController');
const router = express.Router();

router.post('/createlink', createData);
router.post('/getlink', getData);

module.exports = router;