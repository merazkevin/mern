const mongoose = require('mongoose');

const dbName = 'jokes';

mongoose
    .connect(`mongodb://127.0.0.1:27017/${dbName}`)
    .then(()=>{
        console.log(`<=== successfully connected to-> ${dbName}_db ===>`)
    })
    .catch((error)=>{
        console.log(`<--- mongoose connection to ${dbName} failed --->`, error)
    })