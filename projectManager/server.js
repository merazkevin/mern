const express = require('express');
const app = express();
const port = 8000;

require('./server/controllers/Product.controller')(app);


app.listen(port, () => {
    console.log(`<=== You are now listening to ${port} ===>`)
})