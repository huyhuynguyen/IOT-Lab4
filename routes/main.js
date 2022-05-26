const express = require('express');
const router = express.Router();

const mainController = require('../controllers/MainController.js');

router.post('/sensor/change-light-status', mainController.changeLightStatus);
router.put('/sensor/temp-humi', mainController.updateTempHumiSensor);
router.put('/sensor/light', mainController.updateLight);
router.get('/', mainController.index);

module.exports = router;