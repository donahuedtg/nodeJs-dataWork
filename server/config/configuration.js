const path = require('path');

let rootPath = path.normalize(path.join(__dirname, '/../../'));
let port = process.env.port || 1337;

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost:27017/dataWorkDb',
        port: port
    },
    // end dev
    production: {

    }
    //end prod
}
