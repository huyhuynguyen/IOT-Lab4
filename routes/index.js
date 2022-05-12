const dashboardRouter = require('./dashboard');
const mainRouter = require('./main');

function route(app) {
    app.use('/main', mainRouter);
    app.use('/', dashboardRouter);
}

module.exports = route;