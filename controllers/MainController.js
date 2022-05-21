const Sensor = require('../models/Sensor');
const Led = require('../models/Led');

class MainController {
    async index(req, res, next) {
        const sensors = await Sensor.find();
        const leds = await Led.find();
        res.render('main', {
            title: 'Main',
            sensors,
            leds
        })
    }

    async updateSensor(req, res, next) {
        const id = +req.params.id
        const body = req.body
        
    }
}

module.exports = new MainController()