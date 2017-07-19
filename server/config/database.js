const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = (configuration) => {
    mongoose.connect(configuration.db);
    let db = mongoose.connection;

    db.once('open', (err) => {
        if(err){
            console.log(err);
        }

        console.log('MongoDb ready');
    });

    db.on('error', err => console.log(err));

}