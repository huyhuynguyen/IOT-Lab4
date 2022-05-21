const Log = require('../models/Log')
class ChartController {
    async index(req, res, next) {
        const [light, humi, temp] = await Promise.all([
            Log.find({}).where({
                sensor: "Ánh sáng"
            }),
            Log.find({}).where({
                sensor: "Độ ẩm"
            }),
            Log.find({}).where({
                sensor: "Nhiệt độ"
            })
        ])

        res.render('chart', {
            title: 'Chart',
            light,
            humi, 
            temp
        })
    }
}

module.exports = new ChartController()

