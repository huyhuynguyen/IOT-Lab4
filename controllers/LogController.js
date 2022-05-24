const Log = require('../models/Log');
const dayjs = require('dayjs');
const Device = require('../models/Device')


class LogController {
    async index(req, res, next) {
        const limit = process.env.LIMIT || 6
        let page = +req.query.page || 1
        if (page < 1)
            page = 1
        const totalLog = await Log.count()
        const logs = await Log.find({})
            .sort({
                date: -1
            })
            .skip((page - 1) * limit)
            .limit(limit);
        // return res.json(logs)
        res.render('log', {
            title: 'Logs',
            logs,
            paginationNumber: Math.ceil(totalLog / limit),
            currentPage: page
        })
    }

    async create(req, res, next) {
        const device = await Device.findOne().where({
            name: req.body.deviceName
        })

        const now = dayjs().add(7, 'h')
        const log = new Log(
            {
                ...req.body,
                deviceId: +device.id,
                date: new Date(now.toISOString())
            }
        )
        await log.save()
        return res.json(log)
    }
}

module.exports = new LogController()