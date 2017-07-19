const controllers = require('../controllers');


module.exports = (app) => {
    app.get('/',  controllers.home.index);
    app.get('/home/index',  controllers.home.index);
    app.get('/home/contact', controllers.home.contact);
}