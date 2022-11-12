const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        id:{
            type: String,
            required:[true, '{PATH} is required'],
            minlength:[1,'{PATH} must be at least {MINLENGTH} characters.']
        },
        setup:{
            type: String,
            required:[true, '{PATH} is required'],
            minlength:[6,'{PATH} must be at least {MINLENGTH} characters.']
        },
        punchline:{
            type: String,
            required:[true, '{PATH} is required'],
            minlength:[6,'{PATH} must be at least {MINLENGTH} characters.']
        }
    },
    {timestamps: true}
);
const Joke = mongoose.model('Joke', JokeSchema);
module.exports={Joke: Joke};