const express = require('express');
let app = express();

let env = process.env.NODE_ENV || 'development'
let configuration = require('./server/config/configuration')[env];
require('./server/config/database')(configuration);
require('./server/config/express')(app, configuration);
require('./server/config/routes')(app);

app.listen(configuration.port);