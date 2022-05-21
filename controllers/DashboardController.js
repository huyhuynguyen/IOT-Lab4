const Device = require('../models/Device')
class DashboardController {
    async index(req, res, next) {
        const devices = await Device.find();
        // return res.json(devices)
        res.render('index', {
            title: 'Dashboard',
            devices
        })
    }

    async update(req, res, next) {
        const id = +req.params.id
        const device = await Device.findOneAndUpdate({
            id
        }, req.body)
        return res.json(device)
    }
}

module.exports = new DashboardController()