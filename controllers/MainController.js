const Sensor = require('../models/Sensor');
const Led = require('../models/Led');
const Log = require('../models/Log');
const Device = require('../models/Device');
const dayjs = require('dayjs');
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

    async updateTempHumiSensor(req, res, next) {
        const {
            temperature,
            humidity,
            // light
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
            // Sensor.findOneAndUpdate({
            //     id: +light.id || 0
            // }, {
            //     value: light.value
            // }),
        ])

        // create log
        const logArr = []

        const now = dayjs().add(7, 'h')
        for (const key in req.body) {
            if (Object.hasOwnProperty.call(req.body, key)) {
                const log = req.body[key];
                const device = await Device.findOne().where({
                    name: log.deviceName
                })
                if (Object.keys(log).length > 0)
                    logArr.push(new Log({
                        ...log,
                        deviceId: +device.id,
                        date: new Date(now.toISOString())
                    }))
            }
        }

        await Promise.all(logArr.map(log => log.save()))
        return res.json(await Sensor.find({}))
    }

    async updateLight(req, res, next) {
        const {
            light
        } = req.body
        await Sensor.findOneAndUpdate({
            id: +light.id || 0
        }, {
            value: light.value
        })
        const now = dayjs().add(7, 'h')
        const device = await Device.findOne().where({
            name: light.deviceName
        })

        const log = new Log({
            ...light,
            deviceId: +device.id,
            date: new Date(now.toISOString())
        })
        await log.save()
        return res.json(device)
    }
}

module.exports = new MainController()