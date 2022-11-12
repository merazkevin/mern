const express = require('express');
const cors = require('cors');
const port= 8000;
const app = express();
const {jokeRouter} = require('./routes/joke.routes');


require('./config/mongoose.config');




app.use(cors())
app.use(express.json());

// <=== Routes ===>
app.use('/api/jokes', jokeRouter)

app.listen(port, ()=>{
    console.log(`<=== listening on port ${port} for request to respond to ===>`);
});