const Sensor = require('../models/Sensor');
const Led = require('../models/Led');
const logController = require('../controllers/LogController');
const Log = require('../models/Log');

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
        const {
            temperature,
            humidity,
            light
        } = req.body

        await Promise.all([
            Sensor.findOneAndUpdate({
                id: +temperature.id || 0
            }, {
                value: temperature.value
            }),
            Sensor.findOneAndUpdate({
                id: +humidity.id || 0
            }, {
                value: humidity.value
            }),
            Sensor.findOneAndUpdate({
                id: +light.id || 0
            }, {
                value: light.value
            }),
        ])

        // create log
        const logArr = []
        for (const key in req.body) {
            if (Object.hasOwnProperty.call(req.body, key)) {
                const log = req.body[key];
                if (Object.keys(log).length > 0)
                    logArr.push(new Log(log))
            }
        }

        await Promise.all(logArr.map(log => log.save()))
        return res.json(await Sensor.find({}))
    }
}

module.exports = new MainController()