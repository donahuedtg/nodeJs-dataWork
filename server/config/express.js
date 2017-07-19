const express = require('express');

module.exports = (app, configuration) => {
    app.set('view engine', 'vash');
    app.set('views', configuration.rootPath + 'views');

    console.log('Express ready');

    app.use(express.static(configuration.rootPath + 'public'));
}