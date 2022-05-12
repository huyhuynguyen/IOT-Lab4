const sensor = require('../models/Sensor');
const led = require('../models/Led');

class MainController {
    async index(req, res, next) {
        const sensors = await sensor.find();
        const leds = await led.find();
        res.render('main', {
            title: 'Main',
            sensors,
            leds
        })
    }
}

module.exports = new MainController()