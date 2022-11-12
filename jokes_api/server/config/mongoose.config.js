const mongoose = require('mongoose');

const dbname = 'jokes';

mongoose
    .connect(`mongodb://127.0.0.1:27017/${dbname}`)
    .then(()=>{
        console.log(`successfully connected ${dbname}`)
    })