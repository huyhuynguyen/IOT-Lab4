const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/DashboardController.js');

router.get('/', dashboardController.index);

module.exports = router;