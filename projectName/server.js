// const express = require('express');
// const app = express();
// const port = 8000;
// require('./server/routes/person.routes')(app); // This is new

// app.listen(port, () => {
//     console.log(`<=== You are now listening to ${port} ===>`)
// })


// <=== new ===>
const express = require('express');
const cors = require('cors') // This is new <======
const app = express();
app.use(cors()) // This is new <======
require('./server/routes/person.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})