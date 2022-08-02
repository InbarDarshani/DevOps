const mongoose = require('mongoose');

const url = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';

mongoose.connect(url + '/tasks', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully!'))
    .catch((e) => console.log('Unable to connect to database ', e));

//mongoose.set('useFindAndModify', false);

module.exports = mongoose;
