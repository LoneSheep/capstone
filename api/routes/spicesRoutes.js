const express = require('express');
const router = express.Router();

const {getAll, getByName} = require('../controllers/spicesController')

router.get('/', getAll)
router.get('/:name', getByName)

module.exports = router;
