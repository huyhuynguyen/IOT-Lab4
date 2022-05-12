class ChartController {
    index(req, res, next) {
        res.render('chart', {
            title: 'Chart'
        })
    }
}

module.exports = new ChartController()

