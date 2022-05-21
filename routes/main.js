const express = require('express');
const router = express.Router();

const mainController = require('../controllers/MainController.js');

router.put('/sensor/:id', mainController.updateSensor);
router.get('/', mainController.index);

module.exports = router;