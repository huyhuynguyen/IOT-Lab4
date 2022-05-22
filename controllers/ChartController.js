const Log = require('../models/Log')
class ChartController {
    async index(req, res, next) {
        const chartLimit = process.env.CHART_ITEM
        const [light, humi, temp] = await Promise.all([
            Log.find({}).where({
                sensor: "Ánh sáng"
            }).sort({
                date: -1
            }).limit(chartLimit),
            Log.find({}).where({
                sensor: "Độ ẩm"
            }).sort({
                date: -1
            }).limit(chartLimit),
            Log.find({}).where({
                sensor: "Nhiệt độ"
            }).sort({
                date: -1
            }).limit(chartLimit)
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

