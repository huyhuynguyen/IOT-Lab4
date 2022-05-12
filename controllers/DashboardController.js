const device = require('../models/Device')
class DashboardController {
    async index(req, res, next) {
        const devices = await device.find();
        res.render('index', {
            title: 'Dashboard',
            devices
        })
    }
}

module.exports = new DashboardController()