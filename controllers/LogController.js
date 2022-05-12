const log = require('../models/Log');

class LogController {
    async index(req, res, next) {
        const logs = await log.find({}).sort({
            date: 1
        });
        res.render('log', {
            title: 'Logs',
            logs
        })
    }
}

module.exports = new LogController()
